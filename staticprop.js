class User {
    constructor(username){
        this.username = username;
    }
    logme(username){
        console.log(`Username : ${this.username}`);
        
    }
  static  userId(){
        return `123`;
    }
}

class teacher extends User{
    constructor (username,subject){
        super(username);
        this.subject = subject;
    }
}

const Vishal = new teacher("vishal","maths");

Vishal.logme();
console.log(Vishal.userId());