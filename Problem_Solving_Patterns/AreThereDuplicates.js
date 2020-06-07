//check is duplicates (Frequency Counter)
function areThereDuplicates(arguments) {
  let collection = {};
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1;
  }
  for (let key in collection) {
    if (collection[key] > 1) return true;
  }
  return false;
}

// console.log(areThereDuplicates([1, 2, 3, 4, 1]));

//check is duplicates(Multiple Pointers)
const areThereDuplicates1 = (arr) => {
  if (arr.length < 2) {
    return false;
  }
  //sort
  arr = arr.sort((a, b) => {
    if (typeof a === "string") {
      return a.localeCompare(b.toString(), "en", { sensitivity: "base" });
    } else {
      return a - b;
    }
  });
  let start = 0;
  let next = 1;
  while (next < arr.length) {
    if (arr[start] === arr[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
};

// console.log(areThereDuplicates1([1, 2, 3, 4, 1]));

const areThereDuplicatesLinear = (arr) => {
  return new Set(arr).size !== arr.length;
};

console.log(areThereDuplicatesLinear([1, 2, 3, 4, 1]));
