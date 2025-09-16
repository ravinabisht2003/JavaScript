const myNums  = [1,2,3];


// acc : in first time it will take value from passing value which is 0 and after that from currval 
// currVal : taking value from array 



// const myTotal = myNums.reduce( function ( acc, currVal){
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
//     return acc + currVal;
// },0);


const myTotal = myNums.reduce( (acc, currVal) => acc + currVal ,0)

// console.log(myTotal);

const myShoppingCart = [
    {
        itemName : "js course",
        price : 2999
    },

    {
        itemName : "java course",
        price : 3999
    },

    {
        itemName : "py course",
        price : 999
    }
]

const shoppingToPay = myShoppingCart.reduce( (acc, item) => acc + item.price ,0);

console.log(shoppingToPay);
