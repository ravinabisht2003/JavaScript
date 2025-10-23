//Question 1: Create a Promise that resolves with the message "Hello, World!" after 2 seconds.

const helloPromises = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("hello world")

    }, 2000)
});

helloPromises.then(function (success) {
    console.log(success)
})

//Question 2: Create a Promise that simulates checking if a number is even or odd. If even, resolve with "Even number", otherwise reject with "Odd number".

const numberCheckPromise = new Promise(function (resolve, reject) {


    const number = 10;

    if (number % 2 === 0) {
        resolve("even number")
    } else {
        reject("odd number")
    }

})

numberCheckPromise
    .then(function (message) {
        console.log("Success:", message);

    })
    .catch(function (error) {
        console.log("Error:", error);
    })


//Question 3: Write code using .then() and .catch() to handle this Promise:

const myPromise = new Promise((resolve, reject) => {
    const success = true;
    if (success) {
        resolve("Operation successful!");
    } else {
        reject("Operation failed!");
    }
});

myPromise.then(function (success) {
    console.log(success)
}).catch(function (error) {
    console.log(error);
});

//Question 4: Create a function that returns a Promise which simulates fetching user data after 1 second. The user data should be an object with name and age.

const userdataPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        const dataError = true;
        if (!dataError) {
            resolve({ name: "Ravina", age: "22" })
        } else {
            reject("Data is not available")
        }

    }, 1000)
})

userdataPromise
    .then(function (success) {
        console.log(success);
    })
    .catch(function (error) {
        console.log(error);
    })

//Question 5: What will be the output of this code?

console.log("Start");
Promise.resolve().then(() => console.log("Promise"));
console.log("End");

//Answer is Promise

//Question 6: Chain two Promises together - first Promise adds 5 to a number, second Promise multiplies the result by 2.

// const addFivePromise = new Promise(function(resolve,reject){
//         const num = 5;
//         resolve(num + 5); 
// })

// const multiplyPromise = new Promise(function(resolve,reject){
//         resolve(num * 2);

// }) // Its not a good approach 

function addFive(num) {
    return new Promise(function (resolve, reject) {
        resolve(num + 5);
    })
};

function mulplyTwo(num) {
    return new Promise(function (resolve, reject) {
        resolve(num * 2)
    })
}

addFive(10)
    .then(function (result) {
        console.log("After Adding 5 : ", result);
        return mulplyTwo(result);
        //passing the value in second function
    })
    .then(function (result) {
        console.log("After Multiplying by 2 : ", result);

    })

// Question 7: Create a Promise that randomly resolves or rejects (use Math.random()). Handle both cases appropriately.


const randomMathPromise = new Promise(function (resolve, reject) {
    const num = Math.floor(Math.random()*100) ;
    console.log(num)
    if (num > 50) {
        resolve("More than number 50");
    } else {
        reject("Less than or equal to number 50")
    }

});

randomMathPromise
    .then(function (result) {
        console.log(result)
    })
    .catch(function (error) {
        console.log(error)
    })



//Question 8: What's wrong with this code and how would you fix it?


// const getData = new Promise((resolve) => {
//   resolve("Data");
// });
// //In that we did not pass reject 
// getData.then((data) => {
//   console.log(data);
// }).then(() => {
//   console.log(data); // What happens here?

//We did not pass a parameter so it will not pass this
// });

//Right answer

const getDataA = new Promise((resolve) => {
  resolve("Data");
});
//In that we did not pass reject 
getDataA.then((data) => {
  console.log(data);
}).then((data) => {
  console.log(data); 
});

