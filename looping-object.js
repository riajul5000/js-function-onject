const shoppingCart1 = {
    books : 3,
    pen : 12,
    Diary : 3,
    pencil : 4,
    penDrive : 5,
    securityKey : 1, 
}
var sum = Object.keys(shoppingCart1);
var sum1 = Object.values(shoppingCart1);
// console.log(sum , sum1);

for(i=0; i < sum.length; i++){
    var propertyName = sum[i];
    var propertyValue = shoppingCart1[propertyName];
    // console.log(propertyName , propertyValue);
}

for (i = 0; i < sum1.length; i++){
    var property22 = sum1[i];
    var value1 = shoppingCart1[property22];
    // console.log(property22 , value1);
}

for(var propertyName in shoppingCart1){
    var value = shoppingCart1[propertyName];
    // console.log(propertyName , value);
}