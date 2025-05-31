 //  Key Concepts:

 // In JavaScript, functions are also objects.

// You can add properties to a function, like multipleBy5.power = 2.

// Every function in JavaScript automatically has a prototype property (used mainly with constructors).//
 
 function multiplby5(num){
    return num*5;
 }
 
 console.log(multiplby5(10));
 multiplby5.power = 2;
 console.log(multiplby5.power);
 console.log(multiplby5.prototype); // Output: {constructor: ƒ}

function productPrice(productName,price){
    this.productName = productName;
    this.price = price;
}

productPrice.prototype.withgst = function(){
    return this.price = this.price + (this.price/100)*18;
}
productPrice.prototype.finalPrice = function(){
    console.log(`Final price is ${this.price}`);
    
}

const tea = new productPrice("Tea",30);
console.log(tea.price);
console.log(tea.withgst());
tea.finalPrice();


 