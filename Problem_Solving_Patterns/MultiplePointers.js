// MULTIPLE POINTER
/*
  Creating pointers or values that correspond to an index or position
and move towards the begining, end or middle based on a certain condition.

  Very efficient for solving problems with minimal space complexity as
  well
*/

const sumToZero = (arr) => {
  arr = arr.sort((a, b) => a - b);
  let left = 0;
  let right = arr.length - 1;
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[right] + arr[left];
    if (sum == 0) {
      console.log("=================");
      return [arr[left], arr[right]];
    } else if (sum < 0) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(sumToZero([4, 2, 1, -3, -5, -2, 3, -1]));
