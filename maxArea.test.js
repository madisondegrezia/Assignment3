const maxArea = require("./maxArea");

describe("maxArea(arr) returns the max area that will hold the most water", () => {
  test("maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]) => 49", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });
  test("maxArea([4, 3, 2, 1, 4]) => 16", () => {
    expect(maxArea([4, 3, 2, 1, 4])).toEqual(16);
  });
  test("maxArea([1, 2, 1]) => 2", () => {
    expect(maxArea([1, 2, 1])).toEqual(2);
  });
});
