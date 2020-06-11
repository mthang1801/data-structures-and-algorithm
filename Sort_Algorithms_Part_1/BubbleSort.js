//BUBBLE SORT
/*
  A sorting algorithm where the largest values bubble up to the top
Solution : 
  - Start looping with a variable called i of the end of the array toward beginning 
  - Start an inner loop with a variable called j from beginning 0 to i-1
  - If arr[j] is greater than arr[j+1], swap those two values!

  Time of complexity : O(n)
  
Ex: 
    [5, 3, 4, 1, 2]
 => [3, 4, 1, 2, 5]
 => [3, 1, 2, 4, 5]
 => [1, 2, 3, 4, 5]
*/

// function swap(arr, i, j) {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}
const bubbleSort = (arr) => {
  let length = arr.length;
  for (let i = length - 1; i > 0; i--) {
    let swapped = false;
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swapped = true;
      }
    }
    if (!swapped) {
      break;
    }
  }
  return arr;
};

// console.log(bubbleSort([37, 45, 29, 8, 98, 54, 66, 1]));

const arrRandom = Array.apply(null, { length: 100000 }).map(
  Function.call,
  Math.random
);

// console.log(arrRandom);
console.log(bubbleSort(arrRandom));
