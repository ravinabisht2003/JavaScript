const name = "ravina";
const numValue = 6;

// concatenate 
// console.log(name+numValue+"ra");

// back text 

// console.log(`hello, I am ${name}.`);

// another method of declaring a string

const gameName = new String("ravina-game");

// console.log(gameName);

// console.log(gameName[0]);
// proto type 
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(1));
// console.log(gameName.indexOf('a'));

const newString = gameName.substring(0,5);
// console.log(newString);

const anotherString = gameName.slice(1,4);
// console.log(anotherString);

const newName = "  ravina  ";
// console.log(newName);
// console.log(newName.trim());

// replace 

const url = "https://ravina.com/hitesh%20bisht";

// console.log(url.replace('%20','-'));
// console.log(url.includes('ravina'));

// split
// console.log(gameName.split('-'));


// Anchor
const contentString = "Hello, world";
// console.log(contentString.anchor("hello"));

// At
// console.log(`in index 5 letter is ${contentString.at(1)}`);

// Big

// console.log(contentString.big());

// blink

// console.log(contentString.blink());

// Bold

// console.log(contentString.bold());

// Charcodeat

// console.log(contentString.charCodeAt(2));

// code point at 

const symbolVar = "☃★♲";
console.log(symbolVar.codePointAt(2));


