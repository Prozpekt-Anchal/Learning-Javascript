let arr = [1,9,3,4,'hari',true,'h'];
console.log(arr);

//String conversion Function
let str = arr.toString();
console.log(`String is ${str}`);

//Join Function
let a = arr.join(" and ");
console.log(a);

//Concat Function
let b = [5,6,7,8];
let confun = arr.concat(b);
console.log(confun);

//Sort Function
arr = arr.sort();
console.log(arr);

//Splice function 
arr.splice(4,3,22,23,2);
console.log(arr);

//Slice Function
let c = arr.slice(2,4);
console.log(c);

//LOOPING THROUGH ARRAY

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}

let obj = {
    a : 1,
    b : 2,
    c : 3
}
for (const key in obj) {
    
        const element = obj[key];
        console.log(element,key);
    
}

//forin 
for (const key in arr) {
    if (Object.prototype.hasOwnProperty.call(arr, key)) {
        const element = arr[key];
        console.log(key,element)
    }
}

//foreach
arr.forEach(element => {
    element = element +1;
    console.log(element);
});

//map function
arr.map(
    (value,index,array) => {
        console.log( value/value);
    }
)

//filter function
let f = arr.filter(num => num >= 3);
console.log(f);

//reduce
let s = arr.reduce((i,sum) => i + sum,0);
console.log(s);