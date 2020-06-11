//QUICK SORT

/**
  @Pivot_Helper_Function
  Ex:
  let arr = [5,2,1,8,4,7,6,3];
  pivot(arr);
  arr;
  one of these is an acceptable mutation:
  [2,1,4,3,5,8,7,6];
  [1,4,3,2,5,7,6,8];
  [3,2,1,4,5,7,6,8];
  [4,1,2,3,5,6,8,7];
 
  @Pivot_Pseudocode
  - It will help to accept three arguments : an array, a start index, and an end index
  (these can default to 0 and the array minus 1, respectively)
  - Grab the pivot from the start of the array
  - Store the current pivot index in a variable ( this will keep track of where the
  pivot should end up ).
  Loop through the array from the start until the end
    + If the pivot is greater than the current element, increment the pivot index 
      variable and then swap the current value with the element at the pivot index
  - Swap the start element with the pivot index
  - Return pivotindex
 */

function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

function pivot(arr, start = 0, end = arr.length - 1) {
  let swapIndex = start;
  let pivot = arr[start];
  for (let i = start + 1; i <= end; i++) {
    if (arr[i] < pivot) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }
  swap(arr, swapIndex, start);
  return swapIndex;
}

/**
  @Quick_sort_Pseudocode
  - Call the pivot helper on the array
  - When the helper returns to you the updated pivot index, recursively call the
  pivot helper on subarray to the left of that index, and subarray to the right 
  of that index
  - Your base case  occurs when you consider a subway with less than 2 elements
 */

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndex - 1);
    //right
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

console.log(quickSort([4, 6, 9, 1, 2, 5, 3]));
//Ex : [4,6,9,1,2,5,3];
/**
            4
      3,2,1   6,9,5
        3       6
    2,1       5   9
     2      
    1    
      
 */
