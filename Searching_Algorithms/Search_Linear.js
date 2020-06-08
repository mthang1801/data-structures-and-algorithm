// SEARCH LINEAR
// This function accept an array and a value.
//   - Loop through the array and check if the current array element is equal to the value.
//   - If it is, return the index at which the element not found.
//   - If the value is never found, return -1.

const linearSearch = (arr, val) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
};

console.log(linearSearch([3, 1, 64, 24, 33, 87, 12, 98, 54, 21, 10, 47], 10));
