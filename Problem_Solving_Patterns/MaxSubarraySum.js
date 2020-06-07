const maxSubarraySum = (arr, n) => {
  let maxSum = 0;
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  let tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    tempSum = tempSum + arr[i] - arr[i - n];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
};

console.log(maxSubarraySum([1, 2, 3, 11, 2, 9, 7, 4, 5, 6, 7], 2));
