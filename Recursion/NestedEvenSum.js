//NestedEvenSum

const NestedEvenSum = (obj, sum = 0) => {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      sum += NestedEvenSum(obj[key]);
    } else if (typeof obj[key] == "number" && obj[key] % 2 == 0) {
      sum += obj[key];
    }
  }
  return sum;
};

const obj = {
  math: 8,
  physic: 7,
  english: 9,
  sub: {
    js: 10,
    py: 6,
  },
};
console.log(NestedEvenSum(obj));
