const ShoppingCart2 = require("./shoppingCart2");

let shoppingCart = new ShoppingCart2();
shoppingCart.addToCart("Frisbee", 4, 1);
shoppingCart.addToCart("Bat", 4, 1);
shoppingCart.addToCart("Ball", 4, 1);
shoppingCart.addToCart("Helmet", 4, 1);
shoppingCart.removeFromCart("Helmet", 1);

let totalPrice = shoppingCart.calculateTotal();
console.log(totalPrice);
