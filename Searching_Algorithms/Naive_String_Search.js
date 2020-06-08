//PSEUDOCODE
/*
- Loop over the strer string.
- Loop over the shorter string
- If the characters don't match, break out of the inner loop
- If the characters don't match, keep going
- If you complete the inner loop and find a match, increment the count of matches
- return the count
*/

//Method1
const stringSearch = (search, str) => {
  let count = 0;
  let index = 0;
  for (let i = 0; i < str.length; i++) {
    if (search[count] === str[i]) {
      if (count == 0) {
        index = i;
      }
      count++;
    } else {
      count = 0;
    }
    if (count === search.length) {
      return index;
    }
  }
  return -1;
};

console.log(stringSearch("node", "reactjs nodejs react native"));

//Method 2 : Nested Loop
const naiveStringSearch = (search, str) => {
  for (let i = 0; i < str.length - search.length; i++) {
    for (let j = 0; j < search.length; j++) {
      if (str[i + j] !== search[j]) break;
      if (j === search.length - 1) {
        return i;
      }
    }
  }
  return -1;
};

console.log(naiveStringSearch("node", "reactjs nodejs react native"));
