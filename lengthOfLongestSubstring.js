function lengthOfLongestSubstring(str) {
  // initialized variable to store the length of longest substring
  let longest = 0;
  // array will store new substring with unique characters
  let newString = [];
  // traverses through the substring
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
      // checks if the array contains the character
      if(newString.includes(str[j])) {
        break;
      } else {
        // adds new character if it was not found
        newString.push(str[j]);
      }
    }
    // calculates the max length
    longest = Math.max(longest, newString.length);
  }
  return longest;
}

module.exports = lengthOfLongestSubstring;
