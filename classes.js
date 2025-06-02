// After ES6
class User {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptpassword() {
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }

}

const kohli = new User("virat",'kohli@gmail.com',"coverDrive");

console.log(kohli.encryptpassword());
console.log(kohli.changeUsername());

//Behind the Scene
function User(username,email,password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptpassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const rohit = new User("rohit","sharmaji@gmail.com","pull");

console.log(rohit.encryptpassword());
console.log(rohit.changeUsername());

