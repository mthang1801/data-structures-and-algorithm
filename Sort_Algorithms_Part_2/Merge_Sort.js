//MERGING SORT
/*
  Method : Create helper function
  1. Create an empty array, take a look at the smallest values in each input array
  2. While there are still values we haven't looked at...
    + If the value in the first array smaller than the value in the second one, push the value in the first 
array into our results and move on to the next value in the first array.
    + If the value in the second array smaller than the value in the first one, push the value in the second
array into our results and move on to the next vaalue in the second array.
    + Once we exhaust one array, push in all remaining values from the other array.
*/

function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  let results = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] <= arr2[j]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  if (i === arr1.length && j < arr2.length) {
    results = results.concat(arr2.slice(j, arr2.length));
  }
  if (j === arr2.length && i < arr1.length) {
    results = results.concat(arr1.slice(i, arr1.length));
  }
  return results;
}

/*
  - Break up the array into halves until you have arrays that are empty or have one element
  - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of array
  - Once the array has been merged back together, return the mergeed (and sorted!) array
*/

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([8, 3, 5, 4, 7, 6, 1, 2]));
