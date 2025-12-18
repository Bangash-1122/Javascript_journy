
const name = "Awara"
const repoCount = 50


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);


const gameName = new String('prince of persia')

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.lenght);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
// console.log(gameName.indexOf(i));

const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(0, 4)
console.log(anotherString);

const newStringOne = "   awara  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "hhtps://Awara.com/awara%20choudhary"

console.log(url.replace('%20', '-'));

console.log(url.includes('awara'));

console.log(gameName.split('-'));

