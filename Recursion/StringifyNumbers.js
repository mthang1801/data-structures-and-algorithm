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

const stringifyNumbers = (obj) => {
  let newObject = { ...obj };
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      newObject[key] = obj[key].toString();
    } else if (typeof obj[key] === "object" && !Array.isArray(obj[key])) {
      newObject[key] = { ...stringifyNumbers(obj[key]) };
    } else if (typeof obj[key] === "object" && Array.isArray(obj[key])) {
      newObject[key] = flatten(obj[key]).map((item) => item.toString());
    }
  }
  return newObject;
};
const points = {
  name: "John Doe",
  age: 30,
  phone: 1263768127,
  fax: 23167816,
  coordinates: {
    longitude: 10.9998,
    latitude: -106.4938493,
    deepth: {
      x: 73.8,
      y: 154.3,
    },
  },
  numbers: [321, 384, 212, [23, 44], 987, [3, [5, [8, 64]]], 12],
};
console.log(stringifyNumbers(points));
