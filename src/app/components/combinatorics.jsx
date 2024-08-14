//Combinatorics Component
"use client";
import React, { useRef, useState } from 'react';

const Combinatorics = () => {
  const tbl = useRef(null);
  const [inputValues, setInputValues] = useState(Array(45).fill(''));
  const [analyticsData, setAnalyticsData] = useState([]);
  const [modResults, setModResults] = useState([]);
  const [userNumbers, setUserNumbers] = useState(Array(5).fill('')); // State for user input numbers

  // Function to calculate the "choose 2" sums and return modulus 90
  const calculateCombinations = () => {
    const numbers = userNumbers.map(num => parseInt(num)).filter(num => !isNaN(num)); // Convert input to numbers
    let results = [];

    for (let i = 0; i < numbers.length; i++) {
      for (let j = i + 1; j < numbers.length; j++) {
        const sum = numbers[i] + numbers[j];
        const mod90 = sum % 90;
        results.push(mod90);
      }
    }

    return results;
  };

  // Handle Calculate and store the mod results
  const handleCalculate = () => {
    const results = calculateCombinations();
    setModResults(results);
  };

  // Handle ResultChecker
  const handleResultCheck = () => {
    const newInputValues = [...inputValues];
    const tableCells = tbl.current.querySelectorAll('td');
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

  return (
    <>
      <section className="hidden md:block text-xs">
        <div className="overflow-x-auto m-6">
          <div className="bg-slate-300 p-3">
            <button
              className="bg-slate-700 text-white rounded px-2 py-1 m-2"
              onClick={handleCalculate}
            >
              Generate Choose 2 Sequence
            </button>

            <button className="bg-slate-400 text-white rounded px-2 py-1 m-2">
              Export XLSX
            </button>
          </div>

          <div className="flex flex-row space-x-1 sm:flex">

            <div className=" border w-1/4 mx-auto p-2 flex flex-col result-checker">
              <h2 className="animate-bounce w- p-2 m-2 text-sm text-center font-bold ">
                Number Pool 🎱🎱
              </h2>
              <hr className="border-2 mx-auto w-3/4" />
              <p className="w-4/5 mx-auto p-2 m-2 font-light text-center">
                Fill all 45 inputs and click{' '}
                <span className="bg-green-400 ">"Check Result"</span> to
                highlight matching numbers in the table.
              </p>

              <button
                className="mx-auto bg-slate-700 text-white rounded px-2 py-1 m-2"
                onClick={handleResultCheck}
              >
                Result Checker
              </button>

              <div className="flex space-between">
                <div className="w-[55%] pool-numbers m-0 rounded">
                  <div className="check-inputs mx-auto bg-white p-2 flex justify-evenly flex-wrap gap-3 rounded-lg ">
                    {Array.from({ length: 45 }).map((_, index) => (
                      <input
                        key={index}
                        className="rounded-full text-xs"
                        type="number"
                        value={inputValues[index]}
                        onChange={(e) =>
                          setInputValues((prevState) => {
                            const newState = [...prevState];
                            newState[index] = e.target.value;
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
                  <div
                    className="w-full h-full mx-auto text-center border border-white bg-transparent shadow-lg"
                    id="analytics-content"
                  >
                    <ul className="mx-auto ">
                      {analyticsData.map(([key, value]) => (
                        <li
                          key={key}
                          className="w-full border-b border-white last:border-none py-2"
                        >
                          <b className="">{key}</b> {' - '}{' '}
                          <span className="italic">{value} pairs</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          
            <table
              ref={tbl}
              className="w-9/12 border border-black border-collapse text-center text-sm"
            >
              <thead>
                <tr className="bg-gray-200">
                  {Array.from({ length: 20 }).map((_, index) => (
                    <td key={index} className="border pb-3 border-black text-xs border-collapse">
                      <div className="text-xs text-center mb-1">col{index + 1}</div>
                      <input
                        className="w-full mx-auto text-xs p-2 border rounded"
                        type="number"
                        min={1}
                        max={90}
                        value={userNumbers[index] || ''}
                        onChange={(e) => {
                          const newNumbers = [...userNumbers];
                          newNumbers[index] = e.target.value;
                          setUserNumbers(newNumbers);
                        }}
                        // placeholder={`Number ${index + 1}`}
                      />
                    </td>
                  ))}
                </tr>
              </thead>



              <tbody>
                <tr className="border border-black border-collapse">
                  {modResults.map((result, index) => (
                    <td
                      key={index}
                      className="border border-black text-xs border-collapse"
                    >
                      {result}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>

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
