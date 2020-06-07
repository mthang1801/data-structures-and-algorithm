const averagePair = (arr, res) => {
  if (arr.length < 2) {
    return false;
  }
  let start = 0;
  let end = arr.length - 1;
  //sort before implement
  arr = arr.sort((a, b) => a - b);
  while (start < end) {
    let avg = (arr[start] + arr[end]) / 2;
    console.log(avg);
    console.log("start: " + start);
    console.log("end: " + end);
    if (avg == res) {
      return true;
    } else if (avg > res) {
      end--;
    } else if (avg < res) {
      start++;
    }
  }
  return false;
};

console.log(averagePair([2, 4, 6, 8, 20], 11));
