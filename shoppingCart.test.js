const ShoppingCart = require("./shoppingCart");

beforeEach(() => {
  shoppingCart = new ShoppingCart();
});

describe("ShoppingCart: addToCart", () => {
  test("addToCart() 1 item", () => {
    shoppingCart.addToCart("Frisbee", [2, 3.0]);

    expect(shoppingCart.cart.size).toBe(1);
  });
  test("addToCart() 5 items", () => {
    shoppingCart.addToCart("Baseball", [4, 5.0]);
    shoppingCart.addToCart("Football", [2, 3.0]);
    shoppingCart.addToCart("Softball", [3, 5.0]);
    shoppingCart.addToCart("Glove", [1, 2.0]);
    shoppingCart.addToCart("Bat", [4, 5.0]);

    expect(shoppingCart.cart.size).toBe(5);
  });
});

describe("ShoppingCart: Remove from cart", () => {
  test("removeFromCart() 1 item", () => {
    shoppingCart.addToCart("Baseball", [4, 5.0]);
    shoppingCart.removeFromCart("Baseball", 3);

    expect(shoppingCart.cart.size).toBe(1);
  });
});

describe("ShoppingCart: calculate total", () => {
  test("calculateTotal()", () => {
    shoppingCart = new ShoppingCart();
    shoppingCart.addToCart("Baseball", [4, 5.0]);
    //shoppingCart.addToCart("Softball", [4, 5.0]);

    totalCost = shoppingCart.calculateTotal();
    console.log(totalCost);
    expect(totalCost).toEqual(20);
  });
});
