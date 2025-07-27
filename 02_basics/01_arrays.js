const myArray   = [1,2,3,4,5];

console.log(myArray);

const myArrayA   = new Array (1,2,3,4,5);
console.log(myArray);


console.log(myArray.push(6));
console.log(myArray.pop(1));

console.log(myArray.unshift(5));
console.log(myArray.shift());

console.log(myArray.includes(5));
console.log(myArray.indexOf(5));

const myNewArr = myArray.join();

console.log(myNewArr);

// slice, splice

const mySliceArr = myArray.slice(1,3);
const mySpliceArr = myArray.splice(1,3);

console.log(mySliceArr);
console.log(mySpliceArr);




