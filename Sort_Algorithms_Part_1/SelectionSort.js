//SELECTION SORT
/*
  Similar to bubble sort, but instaed of first placing large values into sorted
position, it places small values into sorted position.

  Pseudocode : 
    * Store first element as a smallest value you've seen so far.
    * Compare this item to the next item in the array until you find a smaller one 
    * If a smaller number is found, it should be compared with min value has 
initialez before and continue until the end of the array
    * If the "min" is not the value(index) you initial began with, swap the two values
    * Repeat this with the next element until the array is sorted.
    
  Time of complexity : O(n^2)
    Ex: 
   [5,3,4,1,2]
=> [1,3,4,5,2]
=> [1,2,4,5,3]
=> [1,2,3,5,4]
=> [1,2,3,4,5]
*/

function swap(arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      swap(arr, i, minIndex);
    }
  }
  return arr;
}

console.log(selectionSort([5, 3, 4, 1, 2]));
