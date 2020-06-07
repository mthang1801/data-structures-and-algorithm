//PALADINDROME

const isPalindrome = (str) => {
  if (str.length < 2) {
    return true;
  }
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str[str.length - 1]) return isPalindrome(str.slice(1, -1));
  return false;
};

console.log(isPalindrome("abba"));
console.log(isPalindrome("abccba"));
console.log(isPalindrome("abbcba"));
console.log(isPalindrome("abcd"));
