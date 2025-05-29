const { log } = require("node:console");

const syml = Symbol("key1") ;
const obj = {
    name : "Anchal Thakur",
    "Date" : "12/04/12",
    [syml] : "mykey1",
    email : "anchal@gmail.com",
    isLoggedin : true,
    age : 21,
    lastLoginDays : ["Monday","Saturday"]

}

console.log(obj.isLoggedin);
console.log(obj["Date"]);
console.log(obj[syml]);

obj.email = "anch@gmail.com";

console.log(obj);


