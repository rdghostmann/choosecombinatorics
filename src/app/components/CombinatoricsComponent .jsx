import React, { useState } from 'react';

const CombinatoricsComponent = () => {
  
  
  const numbers = [7, 23, 18, 41, 20];

  // Function to calculate the "choose 2" sums and return modulus 90
  const calculateCombinations = () => {
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

  // Using useState to store and display the results
  const [modResults, setModResults] = useState([]);

  const handleCalculate = () => {
    const results = calculateCombinations();
    setModResults(results);
  };



  
  return (
    <div>
      <h2>Combinatorics Modulus 90 Results</h2>
      <button onClick={handleCalculate}>Calculate</button>
      <div>
        {modResults.length > 0 && (
          <ul>
            {modResults.map((result, index) => (
              <li key={index}>{result}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default CombinatoricsComponent;
