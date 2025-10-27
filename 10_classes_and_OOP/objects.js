 function multiplyfunction (num){
    return num*5;

 }
multiplyfunction.power = 2; 

 console.log(multiplyfunction(5));
 //The code is providing undefined because multiplyfunction.power doesn't exist - you're trying to access a property that was never defined on the multiplyfunction object/function.
 console.log(multiplyfunction.power);
 console.log(multiplyfunction.prototype);
 
//  It shows an empty object {} because:

// JavaScript automatically creates this object when you define a function
// You haven't added any properties to it yet
// The object does exist (it's not undefined), it's just empty
 

function creatUser (username, score){

   this.username = username
   this.score = score

}

creatUser.prototype.increment = function(){
   this.score++
   console.log(`score is ${this.score}`);  
}

creatUser.prototype.printMe = function(){
   console.log(`score is ${this.score}`);
   
}

const chai = new creatUser("chai", 20);
const tea  = creatUser ("tea", 200)

chai.printMe()
console.log(chai.increment());
 
 
 