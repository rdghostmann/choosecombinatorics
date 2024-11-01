// Paired Component

"use client";
import React, { useRef, useState } from 'react';

const PairedCombinatorics = () => {
  const tbl = useRef(null);
  const [analyticsData, setAnalyticsData] = useState([]);
  const [modResults, setModResults] = useState([]);
  const [userNumbers, setUserNumbers] = useState(Array(5).fill('')); // State for user input numbers
  const [chooseN, setChooseN] = useState(2); // State for "choose n"





  // Function to calculate the "choose n" sums and return modulus 90
  const calculateChooseN = (n) => {
    const numbers = userNumbers.map(num => parseInt(num)).filter(num => !isNaN(num));
    let results = [];

    const combinations = (arr, n, start = 0, currentCombo = []) => {
      if (currentCombo.length === n) {
        const sum = currentCombo.reduce((acc, val) => acc + val, 0);
        results.push(sum % 90);
        return;
      }
      for (let i = start; i < arr.length; i++) {
        combinations(arr, n, i + 1, [...currentCombo, arr[i]]);
      }
    };

    combinations(numbers, n);
    return results;
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

    const targetPairs = [
      ["0", "1"], ["1", "0"],
      ["0", "2"], ["2", "0"],
      ["0", "3"], ["3", "0"],
      ["0", "4"], ["4", "0"],
      ["0", "5"], ["5", "0"],
      ["0", "6"], ["6", "0"],
      ["0", "7"], ["7", "0"],
      ["0", "8"], ["8", "0"],
      ["0", "9"], ["9", "0"],
      ["0", "10"], ["10", "0"],
      ["0", "11"], ["11", "0"],
      ["0", "12"], ["12", "0"],
      ["0", "13"], ["13", "0"],
      ["0", "14"], ["14", "0"],
      ["0", "15"], ["15", "0"],
      ["0", "16"], ["16", "0"],
      ["0", "17"], ["17", "0"],
      ["0", "18"], ["18", "0"],
      ["0", "19"], ["19", "0"],
      ["0", "20"], ["20", "0"],
      ["0", "21"], ["21", "0"],
      ["0", "22"], ["22", "0"],
      ["0", "23"], ["23", "0"],
      ["0", "24"], ["24", "0"],
      ["0", "25"], ["25", "0"],
      ["0", "26"], ["26", "0"],
      ["0", "27"], ["27", "0"],
      ["0", "28"], ["28", "0"],
      ["0", "29"], ["29", "0"],
      ["0", "30"], ["30", "0"],
      ["0", "31"], ["31", "0"],
      ["0", "32"], ["32", "0"],
      ["0", "33"], ["33", "0"],
      ["0", "34"], ["34", "0"],
      ["0", "35"], ["35", "0"],
      ["0", "36"], ["36", "0"],
      ["0", "37"], ["37", "0"],
      ["0", "38"], ["38", "0"],
      ["0", "39"], ["39", "0"],
      ["0", "40"], ["40", "0"],
      ["0", "41"], ["41", "0"],
      ["0", "42"], ["42", "0"],
      ["0", "43"], ["43", "0"],
      ["0", "44"], ["44", "0"],
      ["0", "45"], ["45", "0"],
      ["0", "46"], ["46", "0"],
      ["0", "47"], ["47", "0"],
      ["0", "48"], ["48", "0"],
      ["0", "49"], ["49", "0"],
      ["0", "50"], ["50", "0"],
      ["0", "51"], ["51", "0"],
      ["0", "52"], ["52", "0"],
      ["0", "53"], ["53", "0"],
      ["0", "54"], ["54", "0"],
      ["0", "55"], ["55", "0"],
      ["0", "56"], ["56", "0"],
      ["0", "57"], ["57", "0"],
      ["0", "58"], ["58", "0"],
      ["0", "59"], ["59", "0"],
      ["0", "60"], ["60", "0"],
      ["0", "61"], ["61", "0"],
      ["0", "62"], ["62", "0"],
      ["0", "63"], ["63", "0"],
      ["0", "64"], ["64", "0"],
      ["0", "65"], ["65", "0"],
      ["0", "66"], ["66", "0"],
      ["0", "67"], ["67", "0"],
      ["0", "68"], ["68", "0"],
      ["0", "69"], ["69", "0"],
      ["0", "70"], ["70", "0"],
      ["0", "71"], ["71", "0"],
      ["0", "72"], ["72", "0"],
      ["0", "73"], ["73", "0"],
      ["0", "74"], ["74", "0"],
      ["0", "75"], ["75", "0"],
      ["0", "76"], ["76", "0"],
      ["0", "77"], ["77", "0"],
      ["0", "78"], ["78", "0"],
      ["0", "79"], ["79", "0"],
      ["0", "80"], ["80", "0"],
      ["0", "81"], ["81", "0"],
      ["0", "82"], ["82", "0"],
      ["0", "83"], ["83", "0"],
      ["0", "84"], ["84", "0"],
      ["0", "85"], ["85", "0"],
      ["0", "86"], ["86", "0"],
      ["0", "87"], ["87", "0"],
      ["0", "88"], ["88", "0"],
      ["0", "89"], ["89", "0"],
      ["0", "90"], ["90", "0"],
      ["1", "2"], ["2", "1"],
      ["1", "3"], ["3", "1"],
      ["1", "4"], ["4", "1"],
      ["1", "5"], ["5", "1"],
      ["1", "6"], ["6", "1"],
      ["1", "7"], ["7", "1"],
      ["1", "8"], ["8", "1"],
      ["1", "9"], ["9", "1"],
      ["1", "10"], ["10", "1"],
      ["1", "11"], ["11", "1"],
      ["1", "12"], ["12", "1"],
      ["1", "13"], ["13", "1"],
      ["1", "14"], ["14", "1"],
      ["1", "15"], ["15", "1"],
      ["1", "16"], ["16", "1"],
      ["1", "17"], ["17", "1"],
      ["1", "18"], ["18", "1"],
      ["1", "19"], ["19", "1"],
      ["1", "20"], ["20", "1"],
      ["1", "21"], ["21", "1"],
      ["1", "22"], ["22", "1"],
      ["1", "23"], ["23", "1"],
      ["1", "24"], ["24", "1"],
      ["1", "25"], ["25", "1"],
      ["1", "26"], ["26", "1"],
      ["1", "27"], ["27", "1"],
      ["1", "28"], ["28", "1"],
      ["1", "29"], ["29", "1"],
      ["1", "30"], ["30", "1"],
      ["1", "31"], ["31", "1"],
      ["1", "32"], ["32", "1"],
      ["1", "33"], ["33", "1"],
      ["1", "34"], ["34", "1"],
      ["1", "35"], ["35", "1"],
      ["1", "36"], ["36", "1"],
      ["1", "37"], ["37", "1"],
      ["1", "38"], ["38", "1"],
      ["1", "39"], ["39", "1"],
      ["1", "40"], ["40", "1"],
      ["1", "41"], ["41", "1"],
      ["1", "42"], ["42", "1"],
      ["1", "43"], ["43", "1"],
      ["1", "44"], ["44", "1"],
      ["1", "45"], ["45", "1"],
      ["1", "46"], ["46", "1"],
      ["1", "47"], ["47", "1"],
      ["1", "48"], ["48", "1"],
      ["1", "49"], ["49", "1"],
      ["1", "50"], ["50", "1"],
      ["1", "51"], ["51", "1"],
      ["1", "52"], ["52", "1"],
      ["1", "53"], ["53", "1"],
      ["1", "54"], ["54", "1"],
      ["1", "55"], ["55", "1"],
      ["1", "56"], ["56", "1"],
      ["1", "57"], ["57", "1"],
      ["1", "58"], ["58", "1"],
      ["1", "59"], ["59", "1"],
      ["1", "60"], ["60", "1"],
      ["88", "80"], ["80", "88"],
      ["1", "61"], ["61", "1"],
      ["1", "62"], ["62", "1"],
      ["1", "63"], ["63", "1"],
      ["1", "64"], ["64", "1"],
      ["1", "65"], ["65", "1"],
    ]



    // Clear previous highlights
    tableCells.forEach(cell => cell.classList.remove('bg-purple-500', 'text-white'));

    // Traverse each row to find specific adjacent pairs
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
            analytics[pairKey]++;
          } else {
            analytics[pairKey] = 1;
          }

          // Highlight the cells with the matching pair
          currentCell.classList.add('bg-purple-500', 'text-white');
          nextCell.classList.add('bg-purple-500', 'text-white');
        }
      });
    }

    // Update analyticsData with pairs and counts
    setAnalyticsData(Object.entries(analytics).map(([key, value]) => [key, value]));

    // If no pairs were found, reset analytics data
    if (Object.keys(analytics).length === 0) {
      setAnalyticsData([["No pairs found"]]);
    }
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
                  onChange={(e) => setChooseN(parseInt(e.target.value))}
                  className="p-1 mb-2 border rounded"
                />
                <button onClick={handleCalculate} className="mx-auto bg-slate-700 text-white rounded px-2 py-1">
                  Calculate Choose {chooseN}
                </button>
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

export default PairedCombinatorics;
