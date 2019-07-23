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
//addToCart('eggs');

function viewCart() {
  // write your code here
  var itemString ='';
  
  if(cart.length === 1){
    itemString = `you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
  } else if (cart.length === 2){
    itemString = 
  }
  
  
}

console.log(viewCart());



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
