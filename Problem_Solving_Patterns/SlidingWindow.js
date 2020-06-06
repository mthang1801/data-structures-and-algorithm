// SLIDING WINDOW
/*
  This patterns involves creating a window which can either be an array or number 
from one position to another
  Depending on a certain condition, the window either increases or closes( and a new window is created)
  Very useful for keeping track of subset of data in an array/string etr

Example : 
  maxSubarraySum([1,2,5,2,8,1,5], 2) // 10 : [2,8]
  maxSubarraySum([1,2,5,2,8,1,5], 4) // 17 : [2,5,2,8]
  maxSubarraySum([1,2,5,2,8,1,5], 1) // 10 : 8
  maxSubarraySum([4,2,1,6,2], 4) // 10 : 13 : [4,2,1,6]
  maxSubarraySum([], 4) // 10 : null
*/

//generate array numbers
const randomArray = [];
const min = 0;
const max = 10;
for (let i = 0; i < 10; i++) {
  const delta = max - min;
  const random = Math.round(
    (Math.ceil(max - Math.random() * delta) +
      Math.floor(min + Math.random() * delta)) /
      2
  );
  randomArray.push(random);
}

//Method1 : nested loop
//Time complexity : O(n)
const maxSubarraySum1 = (arr, n) => {
  let sum = -Infinity;
  let subArray = [];
  if (arr.length < n) {
    return null;
  }
  for (let i = 0; i < arr.length - n; i++) {
    let temp = 0;
    let tempArray = [];
    for (let j = 0, k = i; j < n && k < arr.length; j++, k++) {
      temp += arr[k];
      tempArray.push(arr[k]);
    }
    if (sum < temp) {
      sum = temp;
      subArray = [...tempArray];
    }
  }
  return { sum, subArray };
};

// console.log(randomArray);
// console.log(maxSubarraySum(randomArray, 10));

//Method2 :
//time conplexity : O(n)
const maxSubarraySum2 = (arr, n) => {
  let maxSum = 0;
  if (arr.length < n) {
    return null;
  }
  // run maxSum first n elements
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  let tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    maxSum = Math.max(maxSum, tempSum);
  }
  console.log(maxSum);
  return maxSum;
};

console.log(randomArray);
console.log(maxSubarraySum2(randomArray, 3));
