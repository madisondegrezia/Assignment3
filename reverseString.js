function reverseString(str) {
  let splitStr = str.split("");

  //reverses the new array
  let reverseArr = splitStr.reverse();

  //joins the reversed array into a string
  let reverseStr = reverseArr.join("");

  return reverseStr;
}

module.exports = reverseString;
