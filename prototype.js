let myUser = ["Kohli","Rohit"];
let userStrength = {
    kohli : "Cover Drive",
    Rohit : "Pull Shot",
    kohliStrength : function(){
        console.log(`Kohli strength is ${this.kohli}`);
        
    }
}
// You're adding a new method called hitesh() to the base Object prototype.
// Now all objects, arrays, functions, etc., can use hitesh().

Object.prototype.Anchal = function(){
    console.log(`Anchal have all the strength`);
    
}

// This adds a method only for arrays, so myHeros.heyHitesh() will work, but heroPower.heyHitesh() will not.
Array.prototype.heyAnchal = function(){
    console.log(`Anchal said hello`);
    
}

myUser.Anchal();
userStrength.Anchal();

myUser.heyAnchal();
// userStrength.heyAnchal();

//Prototype Inheritance
const user = {
 name : "Anchal",
 email : "anchal@gmail.com"
}

const teacher = {
    videotutorial : true
}

const teachingSupport = {
    available : true
}

const TAsupport = {
    fullTime : true,
    __proto__ : teachingSupport
}

teacher.__proto__ = user;

console.log(TAsupport.available)
console.log(teacher.email);

//ModernSyntax

Object.setPrototypeOf(teachingSupport,teacher);

console.log(teachingSupport.available);

// TASupport inherits from TeachingSupport using the older __proto__ syntax.
 
// Custom Method for String
 
let newUsername = "AnchalNew    ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True Length is ${this.trim().length}`);

}

newUsername.trueLength();
"  amit   ".trueLength();
"am  it".trueLength();


