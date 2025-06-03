// function setUsername(username){
//     this.username = username;
// }

// function setuserAccount(username,email,password){
//     setUsername(username);
//     this.email = email;
//     this.password = password;
// }

// const kohli = new setuserAccount("Virat","kohli@gmail.com","coverDrive");

// console.log(kohli);


// setUsername.call(this, username)
// This ensures that this.username = username happens in the context of the current setuserAccount object being created — not in the global scope.

// If you had just called setUsername(username) without .call(this), this inside setUsername would not refer to the new object being created by setuserAccount — it would refer to the global object (window in browsers), and username would not get added to your kohli object.



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
