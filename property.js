var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard : 1,
    mouse : 1,
    pen: 25,
}
// var penCount = shoppingCart.pen;
// console.log(penCount);
var penCount = shoppingCart['books'];
console.log(penCount);
var properties = Object.keys(shoppingCart);
var propertyValue = Object.values(shoppingCart);
// console.log(shoppingCart);
// console.log(properties);
// console.log(propertyValue);

shoppingCart.mouse = 15;
// console.log(shoppingCart);
shoppingCart['mouse'] = 29;
// console.log(shoppingCart);
