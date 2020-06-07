//SAME FREQUENCY

const sameFrequency = (num1, num2) => {
  if (num1.length !== num2.length) {
    return false;
  }
  //Now length of num1 and num2 are equal

  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  let length = strNum1.length;

  let objNum1 = {};
  let objNum2 = {};

  for (let i = 0; i < length; i++) {
    console.log(i);
    let letter1 = strNum1[i];
    let letter2 = strNum2[i];
    objNum1[letter1] = (objNum1[letter1] || 0) + 1;
    objNum2[letter2] = (objNum2[letter2] || 0) + 1;
  }

  for (let key in objNum1) {
    if (objNum1[key] !== objNum2[key]) {
      return false;
    }
  }
  return true;
};

console.log(sameFrequency(3121, 1213));
