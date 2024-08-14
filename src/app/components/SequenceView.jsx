"use client";
import React from 'react';
import { useRef, useState } from 'react';
import { utils, writeFileXLSX } from "xlsx";

const SequenceView = () => {
  const tbl = useRef(null);
  const [inputValues, setInputValues] = useState(Array(45).fill(''));
  const [analyticsData, setAnalyticsData] = useState([]);


  const [sequence1, setSequence1] = useState([]);
  const [sequence2, setSequence2] = useState([]);
  const [sequence3, setSequence3] = useState([]);
  const [sequence4, setSequence4] = useState([]);
  const [sequence5, setSequence5] = useState([]);
  const [sequence6, setSequence6] = useState([]);
  const [sequence7, setSequence7] = useState([]);
  const [sequence8, setSequence8] = useState([]);
  const [sequence9, setSequence9] = useState([]);
  const [sequence10, setSequence10] = useState([]);

  const [increment1, setIncrement1] = useState(0);

  const [start1, setStart1] = useState(0);

  const [increment2, setIncrement2] = useState(0);

  const [start2, setStart2] = useState(0);

  const [increment3, setIncrement3] = useState(0);

  const [start3, setStart3] = useState(0);

  const [increment4, setIncrement4] = useState(0);

  const [start4, setStart4] = useState(0);

  const [increment5, setIncrement5] = useState(0);

  const [start5, setStart5] = useState(0);

  const [increment6, setIncrement6] = useState(0);

  const [start6, setStart6] = useState(0);

  const [increment7, setIncrement7] = useState(0);

  const [start7, setStart7] = useState(0);

  const [increment8, setIncrement8] = useState(0);

  const [start8, setStart8] = useState(0);

  const [increment9, setIncrement9] = useState(0);

  const [start9, setStart9] = useState(0);

  const [increment10, setIncrement10] = useState(0);

  const [start10, setStart10] = useState(0);


  //Generate Sequence Function
  function generateSequence(start, increment) {
    let sequence = [];
    let currentValue = start;
    const maxSequenceLength = 100; // Limiting the sequence length to avoid infinite loop

    // Rule 1: When currentValue reaches 90, start over from 1
    // Rule 2: If currentValue + increment exceeds 90, start over from the difference

    let count = 0; // Track the number of iterations to avoid infinite loop

    while (true) {
      if (count > maxSequenceLength) {
        console.error("Exceeded maximum sequence length. Terminating.");
        break;
      }

      if (currentValue == 90) {
        currentValue = increment;
      } else if (currentValue + increment > 90) {
        currentValue = (currentValue + increment) - 90;
      } else {
        currentValue += increment;
      }

      sequence.push(currentValue);

      if (currentValue == 100) {
        break;
      }



      count++;
    }

    return sequence;
  }


  //Generate Sequence
  const handleGenerateSequence = () => {

    const generatedSequence1 = generateSequence(increment1, start1);
    const generatedSequence2 = generateSequence(increment2, start2);
    const generatedSequence3 = generateSequence(increment3, start3);
    const generatedSequence4 = generateSequence(increment4, start4);
    const generatedSequence5 = generateSequence(increment5, start5);
    const generatedSequence6 = generateSequence(increment6, start6);
    const generatedSequence7 = generateSequence(increment7, start7);
    const generatedSequence8 = generateSequence(increment8, start8);
    const generatedSequence9 = generateSequence(increment9, start9);
    const generatedSequence10 = generateSequence(increment10, start10);

    setSequence1(generatedSequence1);
    setSequence2(generatedSequence2);
    setSequence3(generatedSequence3);
    setSequence4(generatedSequence4);
    setSequence5(generatedSequence5);
    setSequence6(generatedSequence6);
    setSequence7(generatedSequence7);
    setSequence8(generatedSequence8);
    setSequence9(generatedSequence9);
    setSequence10(generatedSequence10);


  };



  //Handling Number Inputs

  const handleIncrementChange1 = (event) => {

    setIncrement1(parseInt(event.target.value, 10));

  };

  const handleStartChange1 = (event) => {

    setStart1(parseInt(event.target.value, 10));

  };

  const handleIncrementChange2 = (event) => {

    setIncrement2(parseInt(event.target.value, 10));

  };

  const handleStartChange2 = (event) => {

    setStart2(parseInt(event.target.value, 10));

  };

  const handleIncrementChange3 = (event) => {

    setIncrement3(parseInt(event.target.value, 10));

  };

  const handleStartChange3 = (event) => {

    setStart3(parseInt(event.target.value, 10));

  };

  const handleIncrementChange4 = (event) => {

    setIncrement4(parseInt(event.target.value, 10));

  };

  const handleStartChange4 = (event) => {

    setStart4(parseInt(event.target.value, 10));

  };

  const handleIncrementChange5 = (event) => {

    setIncrement5(parseInt(event.target.value, 10));

  };

  const handleStartChange5 = (event) => {

    setStart5(parseInt(event.target.value, 10));

  };

  const handleIncrementChange6 = (event) => {

    setIncrement6(parseInt(event.target.value, 10));

  };

  const handleStartChange6 = (event) => {

    setStart6(parseInt(event.target.value, 10));

  };

  const handleIncrementChange7 = (event) => {

    setIncrement7(parseInt(event.target.value, 10));

  };

  const handleStartChange7 = (event) => {

    setStart7(parseInt(event.target.value, 10));

  };

  const handleIncrementChange8 = (event) => {

    setIncrement8(parseInt(event.target.value, 10));

  };

  const handleStartChange8 = (event) => {

    setStart8(parseInt(event.target.value, 10));

  };

  const handleIncrementChange9 = (event) => {

    setIncrement9(parseInt(event.target.value, 10));

  };

  const handleStartChange9 = (event) => {

    setStart9(parseInt(event.target.value, 10));

  };

  const handleIncrementChange10 = (event) => {

    setIncrement10(parseInt(event.target.value, 10));

  };

  const handleStartChange10 = (event) => {

    setStart10(parseInt(event.target.value, 10));

  };


  //Handle ResultChecker
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
            <button className="bg-slate-700 text-white rounded px-2 py-1 m-2"
              onClick={handleGenerateSequence} >Generate Sequence </button>


            <button className="bg-slate-400 text-white rounded px-2 py-1 m-2" onClick={() => {
              // generate workbook from table element
              const wb = utils.table_to_book(tbl.current);
              // write to XLSX
              writeFileXLSX(wb, "SequenceGenerated.xlsx");
            }}>Export XLSX</button>
          </div>

          <div className="flex flex-row-reverse space-x-1 sm:flex">

            <div className="w-1/4 mx-auto p-2 flex flex-col result-checker">
              <h2 className="animate-bounce w- p-2 m-2 text-sm text-center font-bold "> Number Pool 🎱🎱 </h2>
              <hr className="border-2 mx-auto w-3/4" />
              <p className="w-4/5 mx-auto p-2 m-2 font-light text-center">Fill all 45 inputs and click <span className="bg-green-400 ">"Check Result"</span> to highlight matching numbers in the table.</p>

              <button className="mx-auto bg-slate-700 text-white rounded px-2 py-1 m-2"
                onClick={handleResultCheck} >Result Checker</button>

              <div className="flex space-between">
                <div className="w-[55%] pool-numbers m-0 rounded">
                  <div className="check-inputs mx-auto bg-white p-2 flex justify-evenly flex-wrap gap-3 rounded-lg ">
                    {Array.from({ length: 45 }).map((_, index) => (
                      <input
                        key={index}
                        className="rounded-full text-xs"
                        type="number"
                        value={inputValues[index]}
                        onChange={(e) => setInputValues(prevState => {
                          const newState = [...prevState];
                          newState[index] = e.target.value;
                          return newState;
                        })}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[45%] p-1" id="analytics">
                <p className="w-full bg-slate-200 p-1 mb-1 text-center text-[10px] sm:text-xs">Analytics Pairs</p>
                  <div className="w-full h-full mx-auto text-center border border-white bg-transparent shadow-lg" id="analytics-content">
                    <ul className="mx-auto ">
                    {analyticsData.map(([key, value]) => (
                        <li key={key} className="w-full border-b border-white last:border-none py-2">
                         <b className="">{key}</b> {' - '} <span className="italic">{value} pairs</span>
                        </li>
                      ))
                    }
                      </ul>
                    
                  </div>

                </div>
              </div>
            </div>

            <table ref={tbl} className="w-9/12 border border-black border-collapse text-center text-sm">

              <thead>
                <tr className="bg-gray-200">
                  <td className="border border-black text-xs border-collapse w-16">Pair<br /> Input</td>
                  <td className="border border-black text-xs border-collapse">col1
                    <form id="pairInputs1" className="border border-black flex flex-col items-center justify-between mx-2 mb-2 rounded-md">
                      <input
                        id="unit1"
                        type="number"
                        min={1}
                        max={9}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={increment1}
                        onChange={handleIncrementChange1}
                      />
                      <input
                        id="tens1"
                        type="number"
                        min={10}
                        max={99}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={start1}
                        onChange={handleStartChange1}
                      />
                    </form>
                  </td>
                  <td className="border border-black text-xs border-collapse">col2
                    <form id="pairInputs2" className="border border-black flex flex-col items-center justify-between mx-2 mb-2 rounded-md">
                      <input
                        id="unit2"
                        type="number"
                        min={1}
                        max={9}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={increment2}
                        onChange={handleIncrementChange2}
                      />
                      <input
                        id="tens2"
                        type="number"
                        min={10}
                        max={99}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={start2}
                        onChange={handleStartChange2}
                      />
                    </form>
                  </td>
                  <td className="border border-black text-xs border-collapse">col3
                    <form id="pairInputs3" className="border border-black flex flex-col items-center justify-between mx-2 mb-2 rounded-md">
                      <input
                        id="unit2"
                        type="number"
                        min={1}
                        max={9}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={increment3}
                        onChange={handleIncrementChange3}
                      />
                      <input
                        id="tens2"
                        type="number"
                        min={10}
                        max={99}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={start3}
                        onChange={handleStartChange3}
                      />
                    </form>
                  </td>
                  <td className="border border-black text-xs border-collapse">col4
                    <form id="pairInputs4" className="border border-black flex flex-col items-center justify-between mx-2 mb-2 rounded-md">
                      <input
                        id="unit2"
                        type="number"
                        min={1}
                        max={9}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={increment4}
                        onChange={handleIncrementChange4}
                      />
                      <input
                        id="tens2"
                        type="number"
                        min={10}
                        max={99}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={start4}
                        onChange={handleStartChange4}
                      />
                    </form>
                  </td>
                  <td className="border border-black text-xs border-collapse">col5
                    <form id="pairInputs5" className="border border-black flex flex-col items-center justify-between mx-2 mb-2 rounded-md">
                      <input
                        id="unit2"
                        type="number"
                        min={1}
                        max={9}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={increment5}
                        onChange={handleIncrementChange5}
                      />
                      <input
                        id="tens2"
                        type="number"
                        min={10}
                        max={99}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={start5}
                        onChange={handleStartChange5}
                      />
                    </form>
                  </td>
                  <td className="border border-black text-xs border-collapse">col6
                    <form id="pairInputs6" className="border border-black flex flex-col items-center justify-between mx-2 mb-2 rounded-md">
                      <input
                        id="unit1"
                        type="number"
                        min={1}
                        max={9}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={increment6}
                        onChange={handleIncrementChange6}
                      />
                      <input
                        id="tens1"
                        type="number"
                        min={10}
                        max={99}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={start6}
                        onChange={handleStartChange6}
                      />
                    </form>
                  </td>
                  <td className="border border-black text-xs border-collapse">col7
                    <form id="pairInputs7" className="border border-black flex flex-col items-center justify-between mx-2 mb-2 rounded-md">
                      <input
                        id="unit2"
                        type="number"
                        min={1}
                        max={9}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={increment7}
                        onChange={handleIncrementChange7}
                      />
                      <input
                        id="tens2"
                        type="number"
                        min={10}
                        max={99}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={start7}
                        onChange={handleStartChange7}
                      />
                    </form>
                  </td>
                  <td className="border border-black text-xs border-collapse">col8
                    <form id="pairInputs8" className="border border-black flex flex-col items-center justify-between mx-2 mb-2 rounded-md">
                      <input
                        id="unit2"
                        type="number"
                        min={1}
                        max={9}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={increment8}
                        onChange={handleIncrementChange8}
                      />
                      <input
                        id="tens2"
                        type="number"
                        min={10}
                        max={99}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={start8}
                        onChange={handleStartChange8}
                      />
                    </form>
                  </td>
                  <td className="border border-black text-xs border-collapse">col9
                    <form id="pairInputs9" className="border border-black flex flex-col items-center justify-between mx-2 mb-2 rounded-md">
                      <input
                        id="unit2"
                        type="number"
                        min={1}
                        max={9}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={increment9}
                        onChange={handleIncrementChange9}
                      />
                      <input
                        id="tens2"
                        type="number"
                        min={10}
                        max={99}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={start9}
                        onChange={handleStartChange9}
                      />
                    </form>
                  </td>
                  <td className="border border-black text-xs border-collapse">col10
                    <form id="pairInputs10" className="border border-black flex flex-col items-center justify-between mx-2 mb-2 rounded-md">
                      <input
                        id="unit2"
                        type="number"
                        min={1}
                        max={9}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={increment10}
                        onChange={handleIncrementChange10}
                      />
                      <input
                        id="tens2"
                        type="number"
                        min={10}
                        max={99}
                        className="w-12 block border outline-gray-700 focus:outline-black text-xs text-center m-2 rounded"
                        value={start10}
                        onChange={handleStartChange10}
                      />
                    </form>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 1</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[0]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[0]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[0]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[0]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[0]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[0]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[0]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[0]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[0]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[0]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 2</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[1]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[1]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[1]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[1]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[1]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[1]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[1]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[1]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[1]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[1]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 3</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[2]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[2]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[2]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[2]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[2]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[2]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[2]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[2]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[2]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[2]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 4</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[3]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[3]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[3]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[3]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[3]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[3]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[3]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[3]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[3]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[3]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 5</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[4]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[4]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[4]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[4]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[4]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[4]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[4]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[4]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[4]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[4]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 6</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[5]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[5]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[5]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[5]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[5]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[5]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[5]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[5]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[5]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[5]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 7</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[6]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[6]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[6]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[6]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[6]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[6]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[6]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[6]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[6]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[6]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 8</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[7]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[7]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[7]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[7]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[7]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[7]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[7]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[7]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[7]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[7]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 9</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[8]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[8]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[8]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[8]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[8]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[8]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[8]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[8]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[8]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[8]}</td>
                </tr>


                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 10</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[9]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[9]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[9]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[9]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[9]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[9]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[9]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[9]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[9]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[9]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 11</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[10]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[10]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[10]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[10]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[10]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[10]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[10]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[10]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[10]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[10]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 12</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[11]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[11]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[11]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[11]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[11]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[11]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[11]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[11]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[11]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[11]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 13</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[12]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[12]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[12]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[12]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[12]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[12]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[12]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[12]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[12]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[12]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 14</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[13]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[13]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[13]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[13]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[13]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[13]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[13]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[13]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[13]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[13]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 15</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[14]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[14]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[14]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[14]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[14]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[14]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[14]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[14]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[14]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[14]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 16</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[15]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[15]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[15]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[15]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[15]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[15]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[15]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[15]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[15]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[15]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 17</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[16]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[16]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[16]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[16]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[16]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[16]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[16]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[16]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[16]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[16]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 18</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[17]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[17]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[17]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[17]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[17]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[17]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[17]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[17]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[17]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[17]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 19</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[18]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[18]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[18]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[18]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[18]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[18]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[18]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[18]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[18]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[18]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 20</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[19]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[19]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[19]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[19]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[19]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[19]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[19]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[19]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[19]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[19]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 21</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[20]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[20]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[20]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[20]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[20]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[20]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[20]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[20]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[20]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[20]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 22</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[21]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[21]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[21]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[21]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[21]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[21]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[21]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[21]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[21]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[21]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 23</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[22]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[22]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[22]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[22]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[22]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[22]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[22]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[22]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[22]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[22]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 24</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[23]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[23]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[23]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[23]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[23]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[23]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[23]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[23]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[23]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[23]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 25</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[24]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[24]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[24]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[24]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[24]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[24]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[24]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[24]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[24]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[24]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 26</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[25]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[25]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[25]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[25]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[25]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[25]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[25]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[25]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[25]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[25]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 27</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[26]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[26]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[26]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[26]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[26]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[26]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[26]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[26]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[26]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[26]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 28</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[27]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[27]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[27]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[27]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[27]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[27]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[27]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[27]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[27]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[27]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 29</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[28]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[28]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[28]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[28]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[28]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[28]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[28]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[28]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[28]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[28]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 30</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[29]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[29]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[29]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[29]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[29]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[29]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[29]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[29]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[29]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[29]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 31</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[30]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[30]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[30]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[30]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[30]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[30]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[30]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[30]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[30]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[30]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 32</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[31]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[31]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[31]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[31]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[31]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[31]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[31]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[31]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[31]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[31]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 33</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[32]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[32]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[32]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[32]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[32]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[32]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[32]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[32]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[32]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[32]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 34</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[33]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[33]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[33]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[33]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[33]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[33]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[33]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[33]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[33]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[33]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 35</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[34]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[34]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[34]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[34]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[34]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[34]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[34]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[34]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[34]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[34]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 36</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[35]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[35]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[35]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[35]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[35]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[35]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[35]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[35]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[35]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[35]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 37</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[36]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[36]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[36]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[36]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[36]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[36]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[36]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[36]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[36]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[36]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 38</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[37]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[37]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[37]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[37]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[37]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[37]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[37]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[37]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[37]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[37]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 39</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[38]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[38]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[38]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[38]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[38]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[38]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[38]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[38]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[38]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[38]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 40</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[39]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[39]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[39]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[39]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[39]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[39]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[39]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[39]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[39]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[39]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 41</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[40]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[40]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[40]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[40]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[40]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[40]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[40]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[40]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[40]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[40]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 42</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[41]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[41]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[41]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[41]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[41]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[41]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[41]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[41]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[41]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[41]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 43</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[42]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[42]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[42]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[42]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[42]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[42]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[42]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[42]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[42]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[42]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 44</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[43]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[43]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[43]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[43]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[43]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[43]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[43]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[43]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[43]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[43]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 45</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[44]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[44]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[44]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[44]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[44]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[44]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[44]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[44]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[44]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[44]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 46</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[45]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[45]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[45]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[45]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[45]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[45]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[45]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[45]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[45]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[45]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 47</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[46]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[46]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[46]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[46]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[46]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[46]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[46]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[46]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[46]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[46]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 48</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[47]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[47]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[47]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[47]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[47]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[47]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[47]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[47]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[47]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[47]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 49</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[48]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[48]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[48]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[48]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[48]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[48]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[48]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[48]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[48]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[48]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 50</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[49]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[49]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[49]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[49]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[49]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[49]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[49]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[49]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[49]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[49]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 51</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[50]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[50]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[50]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[50]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[50]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[50]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[50]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[50]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[50]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[50]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 52</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[51]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[51]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[51]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[51]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[51]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[51]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[51]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[51]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[51]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[51]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 53</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[52]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[52]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[52]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[52]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[52]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[52]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[52]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[52]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[52]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[52]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 54</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[53]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[53]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[53]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[53]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[53]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[53]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[53]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[53]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[53]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[53]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 55</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[54]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[54]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[54]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[54]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[54]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[54]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[54]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[54]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[54]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[54]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 56</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[55]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[55]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[55]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[55]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[55]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[55]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[55]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[55]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[55]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[55]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 57</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[56]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[56]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[56]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[56]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[56]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[56]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[56]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[56]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[56]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[56]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 58</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[57]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[57]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[57]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[57]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[57]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[57]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[57]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[57]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[57]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[57]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 59</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[58]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[58]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[58]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[58]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[58]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[58]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[58]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[58]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[58]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[58]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 60</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[59]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[59]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[59]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[59]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[59]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[59]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[59]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[59]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[59]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[59]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 61</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[60]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[60]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[60]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[60]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[60]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[60]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[60]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[60]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[60]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[60]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 62</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[61]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[61]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[61]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[61]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[61]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[61]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[61]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[61]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[61]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[61]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 63</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[62]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[62]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[62]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[62]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[62]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[62]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[62]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[62]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[62]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[62]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 64</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[63]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[63]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[63]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[63]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[63]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[63]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[63]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[63]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[63]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[63]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 65</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[64]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[64]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[64]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[64]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[64]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[64]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[64]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[64]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[64]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[64]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 66</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[65]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[65]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[65]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[65]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[65]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[65]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[65]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[65]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[65]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[65]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 67</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[66]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[66]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[66]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[66]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[66]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[66]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[66]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[66]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[66]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[66]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 68</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[67]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[67]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[67]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[67]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[67]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[67]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[67]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[67]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[67]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[67]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 69</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[68]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[68]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[68]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[68]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[68]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[68]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[68]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[68]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[68]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[68]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 70</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[69]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[69]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[69]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[69]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[69]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[69]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[69]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[69]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[69]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[69]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 71</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[70]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[70]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[70]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[70]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[70]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[70]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[70]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[70]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[70]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[70]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 72</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[71]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[71]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[71]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[71]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[71]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[71]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[71]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[71]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[71]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[71]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 73</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[72]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[72]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[72]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[72]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[72]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[72]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[72]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[72]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[72]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[72]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 74</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[73]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[73]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[73]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[73]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[73]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[73]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[73]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[73]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[73]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[73]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 75</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[74]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[74]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[74]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[74]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[74]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[74]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[74]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[74]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[74]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[74]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 76</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[75]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[75]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[75]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[75]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[75]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[75]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[75]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[75]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[75]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[75]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 77</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[76]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[76]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[76]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[76]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[76]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[76]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[76]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[76]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[76]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[76]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 78</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[77]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[77]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[77]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[77]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[77]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[77]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[77]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[77]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[77]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[77]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 79</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[78]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[78]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[78]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[78]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[78]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[78]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[78]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[78]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[78]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[78]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 80</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[79]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[79]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[79]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[79]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[79]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[79]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[79]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[79]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[79]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[79]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 81</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[80]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[80]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[80]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[80]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[80]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[80]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[80]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[80]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[80]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[80]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 82</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[81]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[81]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[81]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[81]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[81]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[81]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[81]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[81]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[81]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[81]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 83</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[82]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[82]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[82]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[82]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[82]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[82]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[82]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[82]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[82]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[82]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 84</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[83]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[83]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[83]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[83]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[83]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[83]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[83]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[83]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[83]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[83]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 85</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[84]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[84]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[84]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[84]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[84]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[84]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[84]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[84]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[84]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[84]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 86</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[85]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[85]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[85]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[85]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[85]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[85]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[85]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[85]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[85]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[85]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 87</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[86]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[86]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[86]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[86]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[86]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[86]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[86]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[86]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[86]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[86]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 88</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[87]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[87]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[87]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[87]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[87]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[87]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[87]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[87]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[87]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[87]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 89</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[88]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[88]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[88]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[88]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[88]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[88]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[88]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[88]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[88]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[88]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 90</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[89]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[89]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[89]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[89]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[89]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[89]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[89]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[89]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[89]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[89]}</td>
                </tr>

                {/* <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 91</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[90]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[90]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[90]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[90]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[90]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[90]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[90]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[90]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[90]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[90]}</td>
                </tr>

                <tr className="border border-black border-collapse">
                  <td className="border border-black text-xs border-collapse ">Line 92</td>
                  <td className="border border-black text-xs border-collapse">{sequence1[91]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence2[91]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence3[91]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence4[91]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence5[91]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence6[91]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence7[91]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence8[91]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence9[91]}</td>
                  <td className="border border-black text-xs border-collapse">{sequence10[91]}</td>
                </tr> */}



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

export default SequenceView