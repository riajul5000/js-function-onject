const shoppingCart = {
    books : 3,
    pen : 12,
    Diary : 3,
    pencil : 4,
}
var countPen = shoppingCart.pen;
var countPen = 44;
// console.log(countPen);



const shoppingCart1 = {
    books : 3,
    pen : 12,
    Diary : 3,
    pencil : 4,
}
var countPen1 = shoppingCart1["pen"];
// var countPen1 = 67;
// console.log(countPen1);

const market= {
    mango :50,
    juice : 40,
    fruits : '2kg',
    apple : '3kg',
}
var properties = Object.keys(market);
// console.log(properties );

const market1= {
    mango :50,
    juice : 40,
    fruits : '2kg',
    apple : '3kg',
}
var properties1 = Object.values(market1);
// console.log(properties1);

const market3 = {
    apple : '5kg',
    lichi : '4kg',
    banana : 4,
}
var properties3 = "lichi";
var property = market3[properties3];
// console.log(properties3);

const market4 = {
    apple : '5kg',
    lichi : '4kg',
    banana : 4,
}
var properties4 = "banana";
var property1 = market4[properties4];
market4.lichi = '5kg';
// console.log(market4)
// console.log(property1);
