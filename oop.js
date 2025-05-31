const user = {
    username : "Anchal",
    loginCount : 10,
    isSignedIn : true,
    welcomeMessage : function(){
        console.log(`Welcome ${this.username}`);
        
    }
}

console.log(user.username);
console.log(user.welcomeMessage());
console.log(this);

function User(username,login,signedIn){
    this.username = username;
    this.login = login;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`welcome ${this.username} welcome`);
        
    }
}

const userone = new User("Amit",10,false);
const usertwo = new User("Kohli",1,true);

console.log(userone.greeting());
console.log(usertwo);




