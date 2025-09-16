// Map - call back function 

const mynum = [1,2,3,4,5,6,7];

// const newnum = mynum.map( (num) => num + 10);
// const newnum = mynum.map( (num) =>  { return num + 10});




// Chaining Methods -- using two - three methods directly. In chaining the first method value will pass in the second method automatically.

const newnum = mynum.
                map((num) => num *10 ).
                map((num) => num + 1).
                filter((num) => num >=40);

console.log(newnum);

