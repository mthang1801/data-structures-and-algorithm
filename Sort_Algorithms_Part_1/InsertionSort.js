//INSERTION SORT
/*
  Build up the sort by gradually creating a larger left half which always sorted

  Pseudocode : 
    * Start by clicking the second element in array
    * Compare the second element with first one and swap if nessary
    * Continue to next elements and if it is in the incorrect order, interate through
the sorted portion (i.e the left side) to place the element in the correct place.
    * Repeat until the array is sorted.
*/

function selectionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let index = -1;
    for (let j = i - 1; j >= 0 && arr[j] > value; j--) {
      arr[j + 1] = arr[j];
      index = j;
    }
    if (index !== -1) {
      arr[index] = value;
    }
  }
  return arr;
}
console.log(selectionSort([2, 1, 9, 76, 4]));
