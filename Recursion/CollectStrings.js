//Method 1 : Pure Recursion Version
const collectStrings1 = (obj) => {
  let newArr = [];
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      newArr = newArr.concat(collectStrings1(obj[key]));
    } else if (typeof obj[key] === "string") {
      newArr.push(obj[key]);
    }
  }
  return newArr;
};

//Method 2: Helper Method Recursion Version
const collectStrings2 = (obj) => {
  const gatherStrings = (objInput) => {
    let tempArray = [];
    for (let key in objInput) {
      if (typeof objInput[key] === "object") {
        tempArray = tempArray.concat(gatherStrings(objInput[key]));
      } else if (typeof objInput[key] === "string") {
        tempArray.push(objInput[key]);
      }
    }
    return tempArray;
  };
  return gatherStrings(obj);
};
console.log(
  collectStrings2({
    name: "John Doe",
    age: 30,
    job: "Dev",
    address: {
      country: "US",
      city: "California",
    },
    contact: {
      company: {
        name: "HTC",
        email: "htc@doe.com",
        phone: "088-888-222",
      },
      private: {
        name: "Doe",
        email: "doe@doe.com",
        phone: "078-643-892",
      },
    },
  })
);
