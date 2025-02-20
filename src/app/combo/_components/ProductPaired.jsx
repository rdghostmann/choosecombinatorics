"use client";
import React, { useRef, useState } from 'react';
import targetPairs from '../../../lib/targetPair';


const ProductPaired = () => {
  const tbl = useRef(null);
  const [analyticsData, setAnalyticsData] = useState([]);
  const [modResults, setModResults] = useState([]);
  const [userNumbers, setUserNumbers] = useState(Array(5).fill('')); // State for user input numbers
  const [chooseN, setChooseN] = useState(2); // State for "choose n"
  const [factor, setFactor] = useState(2);
  const [resultArray, setresultArray] = useState([]);

  const getCombinations = (userNumbers, factor) => {
    if (!Array.isArray(userNumbers) || userNumbers.length === 0 || !factor) return [];

    const numArray = userNumbers.map(Number).filter(n => !isNaN(n) && n !== "");
    let output = [];

    for (let start = 0; start <= numArray.length - factor; start++) {
      let product = 1;
      // Calculate the initial product of the first 'factor' numbers
      for (let j = 0; j < factor; j++) {
        product *= numArray[start + j] || 1; // Ensure we're multiplying numbers
      }
      output.push(product);

      // Continue multiplying the next numbers
      for (let k = start + factor; k < numArray.length; k++) {
        product *= numArray[k] || 1; // Ensure we're multiplying numbers
        output.push(product);
      }
    }

    return output.map(num => (num > 90 ? num % 90 : num)); // Apply modulus 90
  };


  // const numArray = userNumbers.map(Number).filter(n => !isNaN(n) && n !== "");

  const calculateChooseN = () => {
    const numArray = userNumbers.map(Number).filter(n => !isNaN(n) && n !== "");
    let finalOutput = [];

    for (let i = 0; i <= numArray.length - factor; i++) {
      let sequence = getCombinations(numArray.slice(i), factor); // Restart at each position
      finalOutput.push(...sequence);
    }

    setresultArray(finalOutput);
    return finalOutput;
  };


  // Handle calculation and store the mod results
  const handleCalculate = () => {
    if (chooseN < 2 || chooseN > 44) {
      alert("Choose n must be between 2 and 44");
      return;
    }
    const results = calculateChooseN(chooseN);
    setModResults(results);
    setTimeout(() => {
      handleResultCheck();
    }, 2000);
    confirm(`Choose ${chooseN} generated`);
  };

  const handleResultCheck = () => {
    const tableCells = tbl?.current.querySelectorAll('td');
    const analytics = {};


    // Clear previous highlights
    tableCells.forEach(cell => cell.classList.remove('bg-purple-500', 'text-white'));

    // Traverse each row to find specific adjacent pairs and count occurrences
    for (let i = 0; i < tableCells.length - 1; i++) {
      const currentCell = tableCells[i];
      const nextCell = tableCells[i + 1];
      const currentNum = currentCell.innerText.trim();
      const nextNum = nextCell.innerText.trim();

      // Check if the current pair matches any of the target patterns
      targetPairs.forEach(([first, second]) => {
        if (currentNum === first && nextNum === second) {
          const pairKey = `${first} ${second}`;

          // Track pairs and their occurrences
          if (analytics[pairKey]) {
            analytics[pairKey].push([currentCell, nextCell]);
          } else {
            analytics[pairKey] = [[currentCell, nextCell]];
          }
        }
      });
    }

    // Highlight only pairs that appear more than once and update analyticsData
    const highlightedData = [];
    Object.entries(analytics).forEach(([pairKey, cellPairs]) => {
      if (cellPairs.length > 1) { // Only highlight if the pair appears more than once
        cellPairs.forEach(([currentCell, nextCell]) => {
          currentCell.classList.add('bg-purple-500', 'text-white');
          nextCell.classList.add('bg-purple-500', 'text-white');
        });
        highlightedData.push([pairKey, cellPairs.length]); // Add pair and occurrence count
      }
    });

    // Update analyticsData with pairs and counts
    setAnalyticsData(highlightedData.length > 0 ? highlightedData : [["No pairs found"]]);
  };

  // Function to shuffle the userNumbers array
  const handleRandomize = () => {
    const shuffledNumbers = [...userNumbers]
      .filter(num => num !== '') // Exclude empty inputs
      .sort(() => Math.random() - 0.5); // Shuffle the array

    // Fill empty inputs with blank strings after shuffling
    while (shuffledNumbers.length < userNumbers.length) {
      shuffledNumbers.push('');
    }

    setUserNumbers(shuffledNumbers); // Update state with shuffled numbers
  };

  return (
    <>
      <section className="hidden md:block text-xs">
        <div className="overflow-x-scroll m-6">
          <div className="flex flex-row space-x-1 sm:flex">
            <div className="border w-1/4 mx-auto p-2 flex flex-col result-checker">
              <h2 className="animate-bounce w- p-2 m-2 text-sm text-center font-bold ">
                Number Pool 🎱🎱
              </h2>
              <hr className="border-2 mx-auto w-3/4" />
              <p className="w-4/5 mx-auto p-2 m-2 font-light text-center">
                Fill 90 inputs to highlight matching numbers in the table.
              </p>
              <p className="text-center mx-auto bg-slate-700 text-white rounded px-2 py-1 m-2">
                Result Checker runs 3secs for combinatorics values
              </p>
              {/* Analytics Data Display */}
              <section className="analytics mt-4 text-center">
                <h3 className="text-lg font-semibold">Analytics Data</h3>
                <ul className="list-disc list-inside">
                  {analyticsData.map(([pair, count], index) => (
                    <li key={index} className="text-sm">
                      <p> Pair: <span className='font-bold'>{pair}</span> <br /> <span className='text-red-600 font-bold'>Occurrences:</span> {count}</p>
                    </li>
                  ))}
                </ul>
              </section>
            </div>
            <div className="w-9/12 h-fit">
              <div className="max-w-fit my-5 flex flex-col items-center">
                <label htmlFor="choose-n" className="text-sm font-light">
                  Choose N:
                </label>
                <input
                  id="choose-n"
                  type="number"
                  min="2"
                  max="7"
                  value={chooseN}
                  onChange={(e) => setFactor(parseInt(e.target.value))}
                  className="p-1 mb-2 border rounded"
                />
                <button onClick={handleCalculate} className="mx-auto bg-slate-700 text-white rounded px-2 py-1">
                  Calculate Choose {chooseN}
                </button>
                <div className="flex justify-center my-4">
                  <button
                    className="bg-gradient-to-tr focus:outline-1 outline-sky-300 from-violet-500 via-orange-400 to-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => handleRandomize()}
                  >
                    Randomize
                  </button>
                </div>
              </div>
              <table className="w-full h-fit border border-black border-collapse text-center text-sm">
                <thead>
                  {Array.from({ length: 3 }).map((_, rowIndex) => (
                    <tr key={rowIndex} className="bg-gray-200">
                      {Array.from({ length: 15 }).map((_, colIndex) => {
                        const index = rowIndex * 15 + colIndex;
                        return (
                          <td key={index} className="border pb-3 border-black text-xs border-collapse">
                            <div className="text-xs text-center mb-1">col{index + 1}</div>
                            <input
                              className="w-full mx-auto text-xs p-2 m-1 border rounded"
                              type="number"
                              min={1}
                              max={90}
                              value={userNumbers[index] || ''}
                              onChange={(e) => {
                                const newNumbers = [...userNumbers];
                                newNumbers[index] = e.target.value;
                                setUserNumbers(newNumbers);
                              }}
                            />
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </thead>
                <tbody ref={tbl}>
                  {Array.from({ length: Math.ceil(modResults.length / 15) }).map((_, rowIndex) => (
                    <tr key={rowIndex} className="border border-black border-collapse">
                      {modResults.slice(rowIndex * 15, (rowIndex + 1) * 15).map((result, colIndex) => (
                        <td key={colIndex} className="border border-black text-xs border-collapse">
                          {result}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section className="block sm:block md:hidden w-full h-scre  en">
        <div className="animate-bounce mx-auto mt-20 w-3/4">
          <p className="text-center text-xs">This is a Desktop Application</p>
          <p className="text-center text-xs">Please view with a Wider Screen</p>
        </div>
      </section>


    </>
  );
};

export default ProductPaired;
