// FREQUENCY COUNTERS

/*
Writing a function called same, which accepts two arrays.
The function should return true if every value in array has it's correcsponding value squared  in the second array.
The frequency of values must be the same 

Example : 
same( [1,2,3] , [4,1,9])  //true 
same( [1,2,3] , [1,9]) //false
same( [1,2,1] . [4,4,1]) //false (must be frequency)
*/

//Method1 : naiev approach
//Time Complexity : O(n^2)
const same = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex == -1) {
      return false;
    }
    arr2.splice(correctIndex, 1);
  }
  return true;
};

//Method2 : Refactor from method1
//Time Complexity : O(n)
const same2 = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
};
console.log(same2([1, 2, 3, 1, 5], [1, 1, 4, 9, 25]));
