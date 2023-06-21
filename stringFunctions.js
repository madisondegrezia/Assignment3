function reverseString(str) {
  let splitStr = str.split("");

  //reverses the new array
  let reverseArr = splitStr.reverse();

  //joins the reversed array into a string
  let reverseStr = reverseArr.join("");

  return reverseStr;
}

function isPalindrome(str) {
  const strLength = str.length;
  // traverses through the first half of the string
  for (let i = 0; i < strLength / 2; i++) {
    if (str[i] != str[strLength - 1 - i]) {
      // not a palindrome
      return false;
    }
  }
  // its a palindrome
  return true;
}

module.exports = {
  reverseString,
  isPalindrome,
};
