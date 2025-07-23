const name = "ravina";
const numValue = 6;

// concatenate 
console.log(name+numValue+"ra");

// back text 

console.log(`hello, I am ${name}.`);

// another method of declaring a string

const gameName = new String("ravina-game");

console.log(gameName);

console.log(gameName[0]);
// proto type 
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(1));
console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,5);
console.log(newString);

const anotherString = gameName.slice(1,4);
console.log(anotherString);

const newName = "  ravina  ";
console.log(newName);
console.log(newName.trim());

// replace 

const url = "https://ravina.com/hitesh%20bisht";

console.log(url.replace('%20','-'));
console.log(url.includes('ravina'));

console.log(gameName.split('-'));








