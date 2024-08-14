function generateSequence(start, increment) {
  let sequence = [];
  let currentValue = start;
  const maxSequenceLength = 90; // Limiting the sequence length to avoid infinite loop

  // Rule 1: When currentValue reaches 90, start over from 1
  // Rule 2: If currentValue + increment exceeds 90, start over from the difference

  let count = 0; // Track the number of iterations to avoid infinite loop

  while (true) {
    if (count > maxSequenceLength) {
      console.error("Exceeded maximum sequence length. Terminating.");
      break;
    }

    if (currentValue == 90) {
      currentValue = 1;
    } else if (currentValue + increment > 90) {
      currentValue = (currentValue + increment) - 90;
    } else {
      currentValue += increment;
    }

    sequence.push(currentValue);

    if (currentValue == start) {
      break;
    }



    count++;
  }

  return sequence;
}

export default generateSequence;





