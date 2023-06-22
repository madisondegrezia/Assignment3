module.exports = class ShoppingCart {
  constructor() {
    this.cart = new Map();
  }
  addToCart(item, quantity, price) {
    this.cart.set(item, [quantity, price]);
  }

  removeFromCart(item, quantity) {
    let cartItem = this.cart.get(item);

    if (cartItem === undefined) return;

    let currentQuantity = cartItem[0];
    let price = cartItem[1];
    let newQuantity = 0;

    newQuantity = currentQuantity - quantity;
    if (newQuantity < 0) {
      this.cart.delete(item);
      return;
    }

    this.cart.set(item, [newQuantity, price]);
  }

  calculateTotal() {
    let totalPrice = 0;
    for (let [itemName, value] of this.cart) {
      let price = value[0][1];
      let quantity = value[0][0];
      // console.log(price)
      // console.log(quantity)
      totalPrice += quantity * price;
    }

    return totalPrice;
  }
};
