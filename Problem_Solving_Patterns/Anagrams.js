// ANAGRAMS
/*
Given two strings, write a function to determine if the second
string is an anagram of first one. An anagram is  a word, phrase, or name, 
formed by rearranging the letters of another, such as "cinema", formed from 
"iceman". 
Note : white-space can be excluded, every letter should become lower
*/

const anagrams = (str1, str2) => {
  //compare the length of two strings
  str1 = str1.trim().replace(/\s/g, "").toLowerCase();
  str2 = str2.trim().replace(/\s/g, "").toLowerCase();
  console.log(str1);
  console.log(str2);
  if (str1.length !== str2.length) {
    return false;
  }
  const lookup = {};
  for (let val of str2) {
    lookup[val] = ++lookup[val] || 1;
  }
  for (let char of str1) {
    if (!lookup[char]) {
      return false;
    } else {
      lookup[char] -= 1;
    }
    console.log(lookup);
  }

  return true;
};

console.log(anagrams("nagaram", "anagrams"));
