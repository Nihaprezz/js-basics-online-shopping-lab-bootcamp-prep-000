var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemPrice = Math.floor(Math.random() * 100);
  var newObj = {itemName: item, itemPrice: itemPrice};
  cart.push(newObj);
  return `${item} has been added to your cart.`;
}
addToCart('bananas');
addToCart('eggs');

function viewCart() {
  // write your code here
  switch (cart.length){
    case 1:
      return `you have ${cart.itemName} at ${itemPrice}.`
  }
}

viewCart()



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
