console.log("Hello World")
console.log("Hello js")
console.log("I am a Tutorial on Loop")
for(let i = 0;i<=10;i++){
    console.log(i);
}
let obj = {
    name : "Anchal",
    job : "Programmer",
    Number: "unknown",
}
for (const key in obj) {
        const element = obj[key];
        console.log(key,element)
    
}
for (const c of "Hariom") {
    console.log(c); 
}
// Function Started 
function fibo (a){
    if(a == 0 ){
        return 0;
    }
    else if(a == 1 || a==2) return 1;
    return fibo(a-1) + fibo (a-2);
}

console.log(fibo(8)) 
// Taking input in terminal 
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name? ', (name) => {
    console.log(`Hello, ${name}`);
    rl.close();
});
