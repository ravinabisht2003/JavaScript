const myArr = [1,2,3,4,5];

const myArray = new Array(1,2,3,4);



console.log(myArray.push(5));
console.log(myArray);
 

const arrayA = ["A","B","C"];
const arrayB = ["D", "E", "F"];

// arrayA.push(arrayB) ;

// console.log(arrayA);

// help to find a element in another array 

// console.log(arrayA[3][1]);

// help to spread 

const arrayC = arrayA.concat(arrayB);
console.log(arrayC);

// help to spread with the help of spread operation 

// used most
const arrayD = [...arrayA, ...arrayB];
console.log(arrayD);


const another_array = [1,2,3,[4,5],6,[7,8],9];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

// check is exist or not 

console.log(Array.isArray("Ravina"));
console.log(Array.from("Ravina"));
console.log(Array.from({name : "Ravina"})); //intersting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));
