const reverseString = require("./reverseString");

describe("reverseString(str) returns the reversed string", () => {
  test("reverseString(hello) => olleh", () => {
    expect(reverseString("hello")).toEqual("olleh");
  });
  test("reverseString(OpenAI) => IAnepO", () => {
    expect(reverseString("OpenAI")).toEqual("IAnepO");
  });
  test("reverseString(racecar) => racecar", () => {
    expect(reverseString("racecar")).toEqual("racecar");
  });
});
