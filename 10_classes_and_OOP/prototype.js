let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.spiderman}`)
    }
}

Object.prototype.ravina = function(){
    console.log("ravina is present in all objects");
    
}

Array.prototype.heyRavina = function(){
    console.log("ravina says hello");
    
}

heroPower.ravina()
myHeros.heyRavina()

//inheritance - old syntax

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__= User

////inheritance - modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()