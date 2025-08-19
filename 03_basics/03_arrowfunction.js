// This = Current context refer

const user = {
    username : "ravina",
    price    : 999,

    welcomeMsg : function() {
    console.log(`${this.username}, welcome in home`)
    console.log(this);
}
}

// console.log(user);
// user.welcomeMsg();

// user.username = "abhi";
// user.welcomeMsg();
// user.welcomeMsg(this);



// function chai  (){
//     let username="ravina";
//     // console.log(this);
//     console.log(this.username);
    
// }

const chai = () =>{
    let username="ravina";
    // console.log(this);
    console.log(this.username);
    
}


// chai();

// implicit return 

const addTwoNum = (num1, num2)=>(num1+num2);
const addTwoNumA = (num1, num2)=>num1+num2;

console.log(addTwoNum(2,3));
console.log(addTwoNumA(7,3));

// Explicit return 
const addTwoNumC = (num1, num2)=>{
    return num1+num2;
}

console.log(addTwoNumC(7,7));

// Object return

const addTwoNumD = (num1, num2)=>({$UserName:"Ravina"});
console.log(addTwoNumD(7,7));
