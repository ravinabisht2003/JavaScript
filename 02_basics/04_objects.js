// const userName  = new Object();
const userName = {
    name : "ravina",

};

// Adding the value in the object

userName.ID="ravina060602";
userName.email="ravinabisht2003@gmail.com"

console.log(userName);

// object under the object 

const regularUser = {
    email : "ravinabisht2003@gmail.com",
    fullName:{
        user_FullName:{
            first_Name:"Ravina",
            last_Name:"Bisht",
        }
    }
}

// Print the value of the object under the object

console.log(regularUser.fullName.user_FullName.first_Name);

// Checking the value exist or not 
// If the value exist then it will return the last key value print  other wise it will return undefined

console.log(regularUser.fullName.last_FullName?.first_Name);

// merge & combine the object 

const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"a"};

// const  obj3 = Object.assign({},obj1,obj2);

const obj3 = Object.assign({},obj1,obj2);
console.log(obj3);

// 

const users = [
    {
    id :1,
    name :"ravina"
},
{
    id :1,
    name :"ravina"
},  
{
    id :1,
    name :"ravina"
}
];

// providing the object number and the key of the access the data 

console.log(users[1].name);
// help in log the key in log

console.log(Object.keys(userName));

// help in log value of the object 

console.log(Object.values(userName));

// return the value in different-different object 

console.log(Object.entries(userName));

// de- structure

const course   ={
    course_Name :"js",
    Fees : 0,

}

Fees:coursefee=course;

console.log(coursefee);





