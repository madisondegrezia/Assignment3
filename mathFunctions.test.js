const { add, subtract, multiply, divide } = require("./mathFunctions");

describe("add(a,b) returns the sum of a+b", () => {
  test("add(1,2) => 3", () => {
    expect(add(1, 2)).toEqual(3);
  });
  test("add(-1,2) => 1", () => {
    expect(add(-1, 2)).toEqual(1);
  });
});

describe("subtract(a,b) returns the difference of a-b", () => {
  test("subtract(3,2) => 1", () => {
    expect(subtract(3, 2)).toEqual(1);
  });
  test("subtract(6,7) => -1", () => {
    expect(subtract(6, 7)).toEqual(-1);
  });
});

describe("multiply(a,b) returns the product of a*b", () => {
  test("multiply(3,2) => 6", () => {
    expect(multiply(3, 2)).toEqual(6);
  });
  test("multiply(0,2) => 0", () => {
    expect(multiply(0, 2)).toEqual(0);
  });
});

describe("divide(a,b) returns the quotient of a/b", () => {
  test("divide(10,5) => 2", () => {
    expect(divide(10, 2)).toEqual(5);
  });
  test("divide(2,0) => undefined", () => {
    expect(divide(2, 0)).toBeUndefined();
  });
  test("divide(0,5) => 0", () => {
    expect(divide(0, 5)).toEqual(0);
  });
  test("divide(3,2) => 1.5", () => {
    expect(divide(3, 2)).toEqual(1.5);
  });
});
