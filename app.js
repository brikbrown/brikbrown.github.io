function addToCartAlertB() {
  var cart = $("#cart");
  var cartTotal = cart.attr("data-totalitems");
  var newCartTotal = parseInt(cartTotal) + 1;
  cart.addClass("shake").attr("data-totalitems", newCartTotal);
  alert("You have added the Bronze Package to you cart");
}
function addToCartAlertG() {
  var cart = $("#cart");
  var cartTotal = cart.attr("data-totalitems");
  var newCartTotal = parseInt(cartTotal) + 1;
  cart.addClass("shake").attr("data-totalitems", newCartTotal);
  alert("You have added the Gold Package to you cart");
}
function addToCartAlertP() {
  var cart = $("#cart");
  var cartTotal = cart.attr("data-totalitems");
  var newCartTotal = parseInt(cartTotal) + 1;
  cart.addClass("shake").attr("data-totalitems", newCartTotal);
  alert("You have added the Platinum Package to you cart");
}
