// Primitive Data Type ( 7 type ) (Call by value)

// String, Number (include the float value), boolean(true or false), null(empty), undefined(not define value under variable), bigint, symobol 

const stringName = "ravina";
const numberValue = 122.33;
const booleanValue = true;
const nullValu  = null;
let undefinedValue;
let bigInt = 789994995n;

let symobolValue = Symbol('123');
let symobolValue2 = Symbol('123');

console.log(symobolValue == symobolValue2);


// Non-primitive data type (reference)
// array, function, object 

const arrayValue = ["abhinav", "ravina", "aarav", "ira"];

const myObject = {
    name : "ravina",
    age  : 22,
}

const myFunction  = function(){

    console.log("hello world")

1}
