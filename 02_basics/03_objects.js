const my_Symbol = Symbol("Key1");

const myFirst_Object = {
    name : "Ravina",
    class: "12th A",
    email: "ravina@gmail.com",
    [my_Symbol]:"myKey1",
}

console.log(myFirst_Object.email);
console.log(myFirst_Object["email"]);
// Object.freeze(myFirst_Object);
myFirst_Object.email = "ira@gmail.com";

console.log(myFirst_Object["email"]);

console.log(myFirst_Object[my_Symbol]);

myFirst_Object.my_function = function(){
    console.log("I am ravina");
};

console.log(myFirst_Object.my_function());
console.log(myFirst_Object.my_function);


myFirst_Object.my_function2 = function(){
    console.log(`I am  ${this.name}`);
};

console.log(myFirst_Object.my_function2());



