const capitalizeWords = (arr) => {
  if (arr.length === 1) {
    return [arr[0].toUpperCase()];
  }
  const res = capitalizeWords(arr.slice(0, -1));
  const string = arr.slice(arr.length - 1)[0].toUpperCase();
  res.push(string);
  return res;
};

console.log(capitalizeWords(["mai", "van", "quoc"]));
