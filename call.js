function setUsername(username){
    this.username = username;
}

function setuserAccount(username,email,password){
    setUsername.call(this,username);
    this.email = email;
    this.password = password;
}

const kohli = new setuserAccount("Virat","kohli@gmail.com","coverDrive");

console.log(kohli);
