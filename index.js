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
//addToCart('bananas');
//addToCart('eggs');
//addToCart('almonds');

function viewCart() {
  // write your code here
  if(cart.length === 0){
    return 'Your shopping cart is empty.';
  }
  
  var itemString ='';
  
  if(cart.length === 1){
    itemString = `you have ${cart[0].itemName} at $${cart[0].itemPrice}`;
  } else if (cart.length === 2){
    itemString = `you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}`;
  } else if (cart.length === 3){
    itemString = `you have ${cart[0].itemName} at $${cart[0].itemPrice}, ${cart[1].itemName} at $${cart[1].itemPrice}, and ${cart[2].itemName} at $${cart[2].itemPrice}`
  }
  return `In your cart, ${itemString}.`;
}

//console.log(viewCart());



function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
