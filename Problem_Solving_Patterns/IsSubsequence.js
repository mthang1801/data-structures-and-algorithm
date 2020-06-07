//check string 2 has contain string 1 or not
//Method 1
const isSubsequence = (str1, str2) => {
  if (str1 == "" || str2 == "") {
    return false;
  }

  let i = 0;
  let j = 0;
  str2 = str2.toLowerCase();
  while (j < str2.length) {
    if (str2[j] === str1[i]) {
      i++;
    } else {
      i = 0;
    }
    if (i === str1.length) {
      return true;
    }
    j++;
  }
  return false;
};

//Method 2- Recursive but not O(1) Space
const isSubsequence2 = (str1, str2) => {
  if (str1 == "" || str2 == "") return false;
  if (str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1));
  return isSubsequence(str1, str2.slice(1));
};

console.log(isSubsequence("wo", "helloWorld"));
