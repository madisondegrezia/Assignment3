const lengthOfLongestSubstring = require("./lengthOfLongestSubstring");

describe("lengthOfLongestSubstring() returns the longest length", () => {
  test("lengthOfLongestSubstring(bbbbb) => 1", () => {
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
  });
  test("lengthOfLongestSubstring(abcabcbb) => 3", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
  });
  test("lengthOfLongestSubstring(powkew) => 5", () => {
    expect(lengthOfLongestSubstring("powkew")).toEqual(5);
  });
});
