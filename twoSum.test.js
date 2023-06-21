const twoSum = require("./twoSum");

describe("twoSum([], target) returns the indices that add up to the target", () => {
  test("twoSum([2, 7, 11, 15], 9) => [0,1]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
   test("twoSum([3, 2, 4], 5) => [0,1]", () => {
    expect(twoSum([3, 2, 4], 5)).toEqual([0, 1]);
  }); 
  test("twoSum([-1, -2, -3, -4, -5], -8) => [2,4]", () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4]);
  });
  test("twoSum([0, 4, 6, 7, 5], 9) => [1,4]", () => {
    expect(twoSum([0, 4, 6, 7, 5], 9)).toEqual([1, 4]);
  });
  test("twoSum([1, 2, 3], 5) => [1,2]", () => {
    expect(twoSum([1, 2, 3], 5)).toEqual([1, 2]);
  });
});
