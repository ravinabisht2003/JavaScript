//object literal

// const user = {
//     username : "Ravina",
//     loginCount : 8,
//     singedIn : true,
    
//     getUserDetails:function(){
//         console.log(`Username:${this.username}`);
//         console.log(this);
        
//     }
// }

// console.log(user.getUserDetails());

//constructor function - new (use for making new context)

//const promiseOne = new Promise();

function Userfun (username, loginCount, isLoggedIn){
    this.username = username ;
    //this.username is variable
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    //return this
    //without return it will return by default with the help of eplicit
}

// Without 'new':
//The issue you're experiencing is that you're not using the new keyword when calling Userfun. Without new, the function executes in the global context, and this refers to the global object (or undefined in strict mode).

//       const userOne = Userfun("Ravina", 13, true);
// 'this' points to the global object (window in browsers)
// So you're setting: window.username = "Ravina", window.loginCount = 13, etc.

//      const userTwo = Userfun("Abhinav", 10, false);
// 'this' still points to the same global object
// Now you're overwriting: window.username = "Abhinav", window.loginCount = 10, etc.

// console.log(userOne); // Logs the global object, not a separate user object

const userOne = new Userfun("Ravina", 13, true);
const userTwo = new Userfun("Abhinav", 10, false);
console.log(userOne);
