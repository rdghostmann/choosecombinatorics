// Function to calculate the "choose k" sums and return modulus 90
const calculateCombinations = (k) => {
  const numbers = userNumbers.map(num => parseInt(num)).filter(num => !isNaN(num)); // Convert inputs to numbers
  let results = [];

  // Limit the range of inputs based on k
  const rangeLimit = k + 1; // For "choose k", we take the first (k+1) numbers

  for (let i = 0; i < rangeLimit; i++) {
    for (let j = i + 1; j < rangeLimit; j++) {
      const sum = numbers[i] + numbers[j];
      const mod90 = sum % 90;
      results.push(mod90);
    }
  }

  return results;
};

// Function to handle the calculation of all "choose k" combinations
const handleCalculateAllCombinations = () => {
  let allResults = [];

  // Loop through k values from 2 to 44
  for (let k = 2; k <= 44; k++) {
    const resultsForK = calculateCombinations(k);
    allResults = [...allResults, ...resultsForK];
  }

  setModResults(allResults); // Store all results in state
};

// Use the handleCalculateAllCombinations function to calculate and store results
const handleCalculate = () => {
  handleCalculateAllCombinations();
};
