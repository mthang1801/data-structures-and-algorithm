//RADIX SORT
/**
  In order to implement radix sort, it's helpful to build a few helper functions first;
  1. getDigit(num, place) - returns the digit in num atthe given place value ;
  getDigit(12345,0) //5
  getDigit(12345,1) //4
  getDigit(12345,2) //3
  getDigit(12345,3) //2
  getDigit(12345,4) //1
  getDigit(12345,5) //0
  2. degitCount(num) - return the number of element in the value
  degitCount(21322) // 5
  3. mostDegit(nums) - Given an array of numbers, returns the number of digits in
  the largest numbers in the list
  mostDigit([1234, 56, 7]) // 4
  mostDigit([1, 1, 11111, 1]) // 5
  mostDigit([12, 34, 56, 78]) // 2
*/

function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}
function degitCount(num) {
  if (num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDegit(nums) {
  let maxDigit = 0;
  for (let i = 0; i < nums.length; i++) {
    maxDigit = Math.max(maxDigit, degitCount(nums[i]));
  }
  return maxDigit;
}

/**
  Radix sort pseudocode : 
  - Define a function that accept list of numbers
  - Figure out how many digits the largest number has
  - Loop from k = 0 up to this largest number of digits
  - For each iteration of the loop : 
    + Create buckets for each digit (0 to 9)
    + place each number in the corresponding bucket based on its kth digit
  - Replace our existing array with values in out buckets, starting with 0 and going
  up to 9
  - return list at the end 
*/

function radixSort(nums) {
  let maxDigitCount = mostDegit(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({ length: 10 }, () => []);
    for (let i = 0; i < nums.length; i++) {
      // digitBuckets[getDigit(nums[i], k)].push(nums[i]);
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    console.log(digitBuckets);
    nums = [].concat(...digitBuckets);

    // for (let i = 0; i < digitBuckets.length; i++) {
    //   for (let j = 0; j < digitBuckets[i].length; j++) {
    //     nums.push(digitBuckets[i][j]);
    //   }
    // }
    // console.log(nums);
  }
  return nums;
}

console.log(
  radixSort([
    3221,
    7,
    10,
    9680,
    577,
    9420,
    1,
    5622,
    4793,
    2030,
    3138,
    82,
    2599,
    743,
    4127,
  ])
);
