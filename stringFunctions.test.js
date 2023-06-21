const { reverseString, isPalindrome } = require("./stringFunctions");

describe("reverseString(str) returns the reversed string", () => {
  test("reverseString(hello) => olleh", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });
  test("reverseString(hi) => ih", () => {
    expect(reverseString("hi")).toEqual("ih");
  });
});

describe("isPalindrome(str) returns true if it is a palindrome", () => {
    test("isPalindrome(racecar) => true", () => {
      expect(isPalindrome("racecar")).toBeTruthy;
    });
    test("isPalindrome(mom) => true", () => {
      expect(reverseString("mom")).toBeTruthy;
    });
    test("isPalindrome(hello) => false", () => {
        expect(reverseString("hello")).toBeFalsy;
      });
  });

