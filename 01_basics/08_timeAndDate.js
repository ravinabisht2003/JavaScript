const myDate = new Date();

// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date (2025, 0, 23);
let myCreatedDate = new Date ("2025-01-23");

// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

let myTimeNow = Date.now();

// console.log(myTimeNow);
// console.log(myCreatedDate.getTime());

// return in decimal
// console.log(Date.now()/1000);

// return in without decimal

console.log(Math.floor(Date.now()/1000));

let newDate = new Date();

// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());

console.log(newDate.toLocaleString(`default`,{
    weekday: "long",
}));