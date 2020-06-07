//POWER

const power = (base, exponent) => {
  if (exponent === 0) return 1;
  exponent--;
  return base * power(base, exponent);
};

console.log(power(-3, 3));
