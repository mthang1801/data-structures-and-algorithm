//SEARCH BINARY
/*
- This function accept a sorted an array and a value
- Create a left pointer at the start of the array, and right pointer at the end of the array
- While the left pointer comes befores the right pointer : 
  + Create a pointer in the middle
  + If you find the value you want, return the index
  + If the value is too small, move the left pointer up
  + If the value is too large, move the right pointer down
  + If you never find the value, return -1
*/

const binarySearch = (arr, val) => {
  let start = 0;
  let end = arr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (arr[middle] !== val && start <= end) {
    if (val > arr[middle]) start = middle + 1;
    else end = middle - 1;
    middle = Math.floor((start + end) / 2);
  }
  console.log(arr[middle]);
  return arr[middle] === val ? middle : -1;
};
let arrayNumbers = [];
for (let i = 1; i < 36; i++) {
  arrayNumbers.push(i);
}
console.log(binarySearch(arrayNumbers, 32));

//Diccuss about time of complexity Big O
/*
  Suppose we're searching for 13
  [2,4,5,9,11,14,15,19,21,25,28,30,50,52,60,63]  
  left = 2, middle = 19, right = 63
  [2,4,5,9,11,14,15]
  left = 2, middle= 5, right = 15
  [11,14,15]  
  [11]

  => 16 elements = 4 steps

   Suppose we're searching for 32
    [2,4,5,9,11,14,15,19,21,25,28,30,50,52,60,63] 
    left = 2, middle = 19, right = 63
    [21,25,28,30,50,52,60,63]
    left = 21, middle= 30, right = 63
    [30,50,52,60,63]
    left = 50, middle = 52, right 63
    [30,50]
    left = 50, right = 50
    [30]
*/
