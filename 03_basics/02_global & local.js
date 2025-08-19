// let a = 10;
// const b = 20; 
// var c = 30; 

if (true){
let a = 10;
const b = 20; 
var c = 30; 
}

// console.log(a);
// console.log(b);
// console.log(c);
// It will print the 30 because it have global scope

// nested scope

function one (){
    const username = "ravina";
    function two (){
        const website = "youtube";
        console.log(username);
    }
    // console.log(website);
    two()
}

one()

if (true) {

    const username = "abhi";
    if (username === "abhi"){
        const website = "youtube"
        console.log(username);

    }
        // console.log(website);
    }

    function sumA (numA){
         return numA + 2;    

    }

    console.log(sumA(10))
   
    
    const sum = function (num){
        return num + 2;       

    }

    console.log(sum(5))