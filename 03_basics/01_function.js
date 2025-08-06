function sayMyName (){
    console.log("Rav");
    console.log("ina");
}

// sayMyName();

// Adding two numbers

function addingTwoNum (number1, number2){

    console.log(number1+number2);

}

// addingTwoNum(3,4);
// addingTwoNum(3,"4");
// addingTwoNum(3,null);
// addingTwoNum(3,undefined);

function addingTwoNumA (number1, number2){

    console.log(number1+number2);

}

//  const addingNumber = addingTwoNumA(5,4);
//  console.log(addingNumber);

function addingTwoNumB (number1, number2){
    let result = number1+number2;
    return result
    console.log(number1+number2);
}

// const addingNumberA = addingTwoNumB(5,6);
// console.log(addingNumberA);

function logInUserName (userName){
   return`${userName} first logged in`
}

logInUserName("Ravina");
// It will not print the value, becuase function is returing the value

// console.log(logInUserName("Ravina"));
// now it will print the value

// console.log(logInUserName(""));

// console.log(logInUserName());

function logInUserNameA (userNameA){
    if(userNameA == undefined){
        console.log("please enter user name");
        return
    }

    return`${userNameA} just loggedin`
}


// const logInUser = logInUserNameA("Ira");
// const logInUser = logInUserNameA("");
// const logInUser = logInUserNameA();

function logInUserNameB (userNameB){
    if(!userNameB){
        console.log("please enter user name");
        return
    }

    return`${userNameB} just loggedin`
}

const logInUserB = logInUserNameB("Ira");
// const logInUserB = logInUserNameB("");
// const logInUserB = logInUserNameB();

// console.log(logInUserB);

//Function With array and object parameter

// Rest Operator

function calculatorCartPrice(...num1){
    return num1;
}


// function calculatorCartPrice(val1,val2,...num1){
//     return num1;
// }


// function calculatorCartPrice(...num1,val1,val2){
//     return num1;
// } Not Possible 

console.log(calculatorCartPrice(2000,5000,6000,7000));

// Object parameter in function 

const user ={
    userName:"Ira",
    price : 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}

// handleObject(user);

handleObject({
    userName:"aarav",
    price:399
})

// array parameter in function 

const myNewArray = [6,6,2,0,0,2];

function returnSecondValue(getArray){
    // return getArray;
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([1,2,2,2,0,0,4]));











