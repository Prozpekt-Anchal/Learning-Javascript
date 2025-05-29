// Promise Syntax
const promiseOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task is complete.")
        resolve();
    },1000)
})

// Then and Resolve
promiseOne.then(function(){
    console.log("Promise Completed.")
})

// Data passing in then 
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Promise 2");
        resolve({Username : "prozpekt", Email : "prozpekt@gmail.com"})
    },1000)
}).then(function(user){
    console.log(user);
})

// Reject and Error 

 const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false;
        if(!error){
            console.log("Promise Fullfilled");
            resolve({Username : "Anchal" , UserId : "prozpekt-anchal"});
        }
        else{
            console.log("Ohh ho got an error");
            
        }
    },1000)
 })

 promisefour.then(function(user){
    return user.Username;
 }).then(function(user){
    console.log(user);   
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("Promise is finally resolved or rejected");    
})

// Promise through Async and await eith try and catch

const promisefive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true;
        if(!error){
            console.log("Async Promise Fullfilled");
            resolve({Username : "Anchal" , UserId : "prozpekt-anchal"});
        }
        else{
            console.log("Ohh ho got an error with Async");
            
        }
    },1000)
 })

 async function promise5async(){
    try {
       const response =  await promisefive;
        console.log(response)
    } catch (error) {
        console.log(error);
        
    }
 }

 promise5async();

//  const getUserData = async function fetchApiData() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.log(`E: ${error}`);
        
//     }
//  }

//  getUserData();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
   console.log(data);
   
})
.catch((error) => console.log(error) )
 
 
 