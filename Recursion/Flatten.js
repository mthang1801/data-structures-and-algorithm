//FLATTEN

const flatten = (arr) => {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      newArr = newArr.concat(flatten(arr[i]));
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

console.log(flatten(["a", "b", "c", ["d", "e"], [[["g", "h"]]]]));
