// function Car(model) {
//   this.model = model;
// }

// Car.prototype.drive = function() {
//   return "Driving " + this.model;
// };

// const myCar = new Car("Tesla");
// console.log(myCar.drive());

//driving tesla

function Dog(name) {
  this.name = name;
}

const dog1 = new Dog("Buddy");
const dog2 = new Dog("Max");

// Are these the same function in memory?
console.log(dog1.bark === dog2.bark); // What's the answer if bark is on the prototype?

//true


function Person(name) {
  this.name = name;
}

Person.prototype.age = 25;

const person1 = new Person("Alice");
const person2 = new Person("Bob");

person1.age = 30;

console.log(person1.age); // ?
console.log(person2.age); // ?

// 30,25

function Animal() {}

Animal.prototype.speak = function() {
  return "Some sound";
};

const cat = new Animal();
console.log(cat.speak()); // ?

// Some sound

function Calculator() {
  this.result = 0;
}

Calculator.prototype.add = function(num) {
  this.result += num;
};

const calc = new Calculator();
console.log(calc.add(5)); // This will throw an error - why and how to fix?

//by using prototype we can fix it 

function Book(title) {
  this.title = title;
  this.read = function() {
    return "Reading " + this.title;
  };
}

Book.prototype.read = function() {
  return "Prototype reading " + this.title;
};

const myBook = new Book("1984");
console.log(myBook.read());

//Reading 1984 - tell me the logic of it 

//Which approach uses less memory and why?

// Approach A
function User(name) {
  this.name = name;
  this.greet = function() {
    return "Hello " + this.name;
  };
}

// Approach B
function User(name) {
  this.name = name;
}
User.prototype.greet = function() {
  return "Hello " + this.name;
};

// Create 1000 users with each approach

//approch b - you tell me why


function Vehicle() {}
Vehicle.prototype.type = "vehicle";

function Car() {}
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.wheels = 4;

const myCar = new Car();
console.log(myCar.wheels); // 4
console.log(myCar.type);   // vehicle

//--------

function Phone(brand) {
  this.brand = brand;
}

Phone.prototype.brand = "Generic";
Phone.prototype.call = function() {
  return this.brand + " is calling";
};

const myPhone = new Phone("iPhone");
console.log(myPhone.brand);  // iphone
console.log(myPhone.call()); // iphone is calling


// -----------

function Laptop(name) {
  this.name = name;
}

const laptop1 = new Laptop("Dell");

Laptop.prototype.powerOn = function() {
  return this.name + " is powering on";
};

const laptop2 = new Laptop("HP");

console.log(laptop1.powerOn()); // Dell is powering on
console.log(laptop2.powerOn()); // HP is powering on

//---

function Game(title) {
  this.title = title;
}

Game.prototype.platform = "PC";
//adding a property with the help of prototype

const myGame = new Game("Minecraft");

//adding its own property 

myGame.players = 4;

console.log(myGame.hasOwnProperty("title"));    // true
console.log(myGame.hasOwnProperty("platform")); // false
console.log(myGame.hasOwnProperty("players"));  // true

//----------------

function Food() {}
Food.prototype.type = "edible";

function Fruit() {}
Fruit.prototype = Object.create(Food.prototype);
Fruit.prototype.category = "fruit";

const apple = new Fruit();
console.log(apple.category); // ?fruit
console.log(apple.type);     // ? edible
console.log(apple.taste);    // ? its undefined

//-----------------------------------

function Counter() {
  this.count = 0;
}

Counter.prototype.increment = function() {
  this.count++;
  return this.count;
};

const counter1 = new Counter();
const counter2 = new Counter();

counter1.increment();
counter1.increment();
counter2.increment();

console.log(counter1.count); // ? 2 - because its increment happening two times
console.log(counter2.count); // ? 1

//---------------


function Student(name) {
  this.name = name;
}

Student.prototype.grade = "A";

const student1 = new Student("John");
student1.grade = "B";

console.log(student1.grade); // ? before delete its - B 

delete student1.grade;

console.log(student1.grade); // ? after delete its - A


//-----------------------

