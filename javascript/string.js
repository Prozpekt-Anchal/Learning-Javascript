console.log('Implementing String');
let a = "STRING";
console.log(a)
console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])

// Length of array or string
console.log(a.length); 

//Template Literals
let name = "Anchal";
let friend = "Ravensh";
console.log(`His name is ${name} and his friend is ${friend}.`);

//String properties
let b = "Hariom";
console.log(b.toUpperCase());
console.log(b.toLowerCase());

console.log(b.slice(1,5));

console.log(b.replace("Ha", "22"));
console.log(a.concat(b + "Anchal"))

//****************************************************** */

const names = new String('anchal thakur');
const age = new String('21');

console.log(`My name is ${names.toUpperCase()} and age is ${age}`);

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

const todaydate = new Date();
console.log(todaydate.toDateString());
console.log(todaydate.toISOString());
console.log(todaydate.toLocaleDateString());
console.log(todaydate.toLocaleString());
