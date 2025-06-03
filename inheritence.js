class User {
    constructor(username){
        this.username = username;
    }
    name() {
    console.log(`Username is ${this.username}`);
        
    }

}

class Teacher extends User {
    constructor(username,email, subject){
        super(username)
        this.email = email;
        this.subject = subject;
    }

    subjectName(){
        console.log(`${this.username} teaches ${this.subject}`);
        
    }
}

const vishal = new Teacher("Vishal","vishal@gmail","maths");
vishal.name();
vishal.subjectName();