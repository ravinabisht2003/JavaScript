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

console.log(logInUserB);









