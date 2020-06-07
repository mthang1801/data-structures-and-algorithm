const findLongestSubstring = (str) => {
  let longest = 0;
  let seen = {};
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (seen[char]) {
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    //store index of the next char so as not to count
    seen[char] = i + 1;
  }
  return longest;
};
console.log(findLongestSubstring("synchronm doctor teacher architecture"));
