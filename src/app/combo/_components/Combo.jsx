// Combinatorics Component
// @franklin add
"use client";
import React, { useRef, useState } from 'react';

const Combinatorics = () => {
  const tbl = useRef(null);
  const [inputValues, setInputValues] = useState(Array.from({ length: 90 }, (_, i) => i + 1));
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
      let sum = 0;
      // Calculate the initial sum of the first 'factor' numbers
      for (let j = 0; j < factor; j++) {
        sum += numArray[start + j] || 0; // Ensure we're adding numbers
      }
      output.push(sum);

      // Continue adding the next numbers to the sum
      for (let k = start + factor; k < numArray.length; k++) {
        sum += numArray[k] || 0; // Ensure we're adding numbers
        output.push(sum);
      }
    }

    return output.map(num => (num > 90 ? num % 90 : num)); // Apply modulus 90
  };

  // const numArray = userNumbers.map(Number).filter(n => !isNaN(n) && n !== "");


  const calculateNChooseN = () => {
    const numArray = userNumbers.map(Number).filter(n => !isNaN(n) && n !== "");
    let finalOutput = [];

    for (let i = 0; i <= numArray.length - factor; i++) {
      let sequence = getCombinations(numArray.slice(i), factor); // Restart at each position
      finalOutput.push(...sequence);
    }

    setresultArray(finalOutput);
    return finalOutput;
  };
  
  
  



  const handleCalculateCombo = () => {
    if (factor < 2 || factor > 44) {
      alert("Choose n must be between 2 and 44");
      return;
    }

    const results = calculateNChooseN();
    setModResults(results);

    setTimeout(() => {
      handleResultCheck();
    }, 2000);

    confirm(`Choose ${factor} generated`);
  };

  // Handle ResultChecker
  const handleResultCheck = () => {
    const newInputValues = [...inputValues];
    const tableCells = tbl?.current.querySelectorAll('td');
    const analytics = {};

    for (let i = 0; i < inputValues.length; i++) {
      const inputValue = inputValues[i];

      if (inputValue !== '') {
        for (let j = 0; j < tableCells.length; j++) {
          if (parseInt(tableCells[j].innerText) === parseInt(inputValue)) {
            tableCells[j].classList.add('bg-green-400', 'text-white');

            if (analytics[inputValue]) {
              analytics[inputValue] += 1;
            } else {
              analytics[inputValue] = 1;
            }
          }
        }
      }
    }
    setInputValues(newInputValues);
    setAnalyticsData(Object.entries(analytics));
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
              <div className="flex space-between">
                <div className="w-[55%] pool-numbers m-0 rounded">
                  <div className="check-inputs mx-auto bg-white p-2 flex justify-evenly flex-wrap gap-3 rounded-lg">
                    {Array.from({ length: 90 }).map((_, index) => (
                      <input
                        key={index}
                        className="rounded-full text-xs"
                        type="number"
                        value={inputValues[index]}
                        onChange={(e) =>
                          setInputValues((prevState) => {
                            const newState = [...prevState];
                            const value = parseInt(e.target.value, 10);
                            newState[index] = isNaN(value) ? '' : value; // Ensure valid numbers
                            return newState;
                          })
                        }
                      />
                    ))}

                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[45%] p-1" id="analytics">
                  <p className="w-full bg-slate-200 p-1 mb-1 text-center text-[10px] sm:text-xs">
                    Analytics Pairs
                  </p>
                  <div className="w-full h-full mx-auto text-center border border-white bg-transparent shadow-lg" id="analytics-content">
                    <ul className="mx-auto ">
                      {analyticsData.map(([key, value]) => (
                        <li key={key} className="w-full border-b border-white last:border-none py-2">
                          <b className="">{key}</b> {' - '}{' '}<span className="italic">{value} pairs</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-9/12 h-fit">
              <div className="flex space-x-4 w-9/12 h-fit">
                <div className="max-w-fit my-5 flex flex-col items-center">
                  <label htmlFor="choose-n" className="text-sm font-light">
                    Choose N:
                  </label>
                  <input
                    id="choose-n"
                    type="number"
                    min="2"
                    max="7"
                    value={factor}
                    onChange={(e) => setFactor(parseInt(e.target.value))}
                    className="p-1 mb-2 border rounded"
                  />
                  <button onClick={handleCalculateCombo} className="mx-auto bg-slate-700 text-white rounded px-2 py-1">
                    Calculate Choose Combo {factor}
                  </button>
                </div>

                <div className="max-w-fit my-5 flex flex-col items-center">
                  <label style={{ visibility: "hidden" }} htmlFor="choose-n" className="text-sm font-light">
                    Choose N:
                  </label>
                  <input style={{ visibility: "hidden" }}
                    id="choose-n"
                    type="number"
                    min="2"
                    max="7"
                    value={chooseN}
                    onChange={(e) => setChooseN(parseInt(e.target.value))}
                    className="p-1 mb-2 border rounded"
                  />
                  <button onClick={() => handleRandomize()} className="mx-auto bg-gradient-to-tr focus:outline-1 outline-sky-300 from-violet-500 via-orange-400 to-blue-500 text-white rounded px-2 py-1">
                    Randomize
                  </button>
                </div>
              </div>
              <table ref={tbl} className="w-full h-fit border border-black border-collapse text-center text-sm">
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
                <tbody>
                  {Array.from({ length: Math.ceil(modResults.length / 15) }).map((_, rowIndex) => (
                    <tr key={rowIndex} className="border border-black border-collapse">
                      {modResults.slice(rowIndex * 15, (rowIndex + 1) * 15).map((result, colIndex) => (
                        <td key={colIndex} className="border border-black text-xs border-collapse bg-green-400 text-white">
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
      <section className="block sm:block md:hidden w-full h-screen">
        <div className="animate-bounce mx-auto mt-20 w-3/4">
          <p className="text-center text-xs">This is a Desktop Application</p>
          <p className="text-center text-xs">Please view with a Wider Screen</p>
        </div>
      </section>
    </>
  );
};
export default Combinatorics;
