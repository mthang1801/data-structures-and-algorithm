// SUM RANGE

// // ex : sumRange(3) = 6
//           return 3 + sumRange(2) = 3
//             return 2 + sumRange(1) = 1
//               return 1
const sumRange = (num) => {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
};

console.log(sumRange(5));
