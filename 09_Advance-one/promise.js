const promiseOne = new Promise(function (resolve, reject){
    setTimeout(function(){
        console.log("Async is completed")
        resolve();
    },1000)
})

promiseOne.then(function(){
    console.log("Promise consumed")
    
})



new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Two is completed");
        resolve();
        
    },2000)
}).then(function(){
    console.log("Promise Two consumed")
})


//Passing a prameter
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(user){
        resolve({username:"ravina", email:"ravinabisht2003@gmail.com"})

    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})