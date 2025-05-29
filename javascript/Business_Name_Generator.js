/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/
//Adjective Selection
let a = Math.random();
console.log(a)
    let adjectives ;
if(a<0.3333){
    adjectives = "Crazy";
}
else if(a<0.6666 && a>=0.3333){
     adjectives = "Amazing";
}
else{
     adjectives = "Fire";
}
console.log(adjectives)

//ShopName Selection
let b = Math.random();
console.log(b)
let ShopName;
if(b<0.3333){
     ShopName = "Engine";
}
else if(b<0.6666 && b>=0.3333){
     ShopName = "Food";
}
else{
     ShopName = "Garments";
}
console.log(ShopName)
//Another AnotherwordSelection
let c = Math.random();
console.log(c)
let Anotherword;
if(c<0.3333){
     Anotherword = "Crazy";
}
else if(c<0.6666 && c>=0.3333){
     Anotherword = "Amazing";
}
else{
     Anotherword = "Fire";
}
console.log(Anotherword)

console.log(`The Business name will be "${adjectives} ${ShopName} ${Anotherword}"u.`);