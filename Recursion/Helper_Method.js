// HELPER METHOD

const collectOddsValues = (arr) => {
  let results = [];
  const helper = (inputArray) => {
    if (!inputArray.length) {
      return;
    }
    if (inputArray[0] % 2 != 0) {
      results.push(inputArray[0]);
    }
    helper(inputArray.slice(1));
  };
  helper(arr);
  return results;
};

console.log(collectOddsValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

const collectEvenValues = (arr) => {
  let results = [];
  if (!arr.length) {
    return results;
  }
  if (arr[0] % 2 == 0) {
    results.push(arr[0]);
  }

  results = results.concat(collectEvenValues(arr.slice(1)));
  return results;
};

console.log(collectEvenValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
