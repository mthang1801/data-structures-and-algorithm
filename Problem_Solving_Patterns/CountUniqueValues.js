// COUNT UNIQUE VALUES
/*
  Implement a function called "countUniqueValues", which accepts a sorted
array, and counts the unique values in the array. There can be negative 
numbers in the array, but it will always be sorted.

Example : 
  countUniqueValues([1,1,1,1,1,2]) //2
  countUniqueValues([1,2,3,4,4,7,10,10,11]) //7
  countUniqueValues([]) //0
  countUniqueValues([-2,-1,0,1]) //4
*/

const countUniqueValues = (arr) => {
  //sort array before implement.
  //Make sure this array only contains number variable
  arr = arr.sort((a, b) => a - b);

  let i = 0;
  count = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
};

console.log(countUniqueValues([1, 1, 1, 2, 3, 4, 4, 7, 7]));
