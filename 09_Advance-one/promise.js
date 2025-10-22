// const promiseOne = new Promise(function (resolve, reject){
//     setTimeout(function(){
//         console.log("Async is completed")
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed")
    
// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async Two is completed");
//         resolve();
        
//     },2000)
// }).then(function(){
//     console.log("Promise Two consumed")
// })


// //Passing a prameter
// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(user){
//         resolve({username:"ravina", email:"ravinabisht2003@gmail.com"})

//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         let error = false;
//         if(!error){
//             resolve({username:"ravina", password:"123"})
//         }else{
//             reject('ERROR:Something went wrong')
//         }
        
//     }, 1000);
// })

// promiseFour.then((user)=>{
//     console.log(user);
//     return user.username
    
// }).then((username)=>{
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(()=>console.log("The Promise is either resolve or reject"));

// //async

// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function() {
//         let error = false;
//         if(!error){
//             resolve({username:"JS", password:"123"})
//         }else{
//             reject('ERROR:Something went wrong in JS')
//         }
        
//     }, 1000);
// })

// async function ConsumedPromiseFive() {
//     try {
//         const  response  = await promiseFive
//         console.log(response);
        

//     } catch (error) {

//         console.log(error);
        
        
//     }
// }

// ConsumedPromiseFive();

async function getallusers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E:",error)
        
    }
    
}

getallusers();




fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
