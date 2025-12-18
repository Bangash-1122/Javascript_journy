// for of 

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hello world!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);
}

// Maps 

// const map = new Map()
// map.set('IN', "India")
// map.set('Fr', "France")
// map.set('USA', "United States of America")

// // console.log(map);

// for (const key in map) {
//     console.log(key);
// }

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }

// const myObject = {
//     js: 'javascript',
//     ccp: 'C++',
//     rb: 'ruby',
//     swift: 'swift by apple'
// }

// for (const key in myObject) {
//     console.log(`${key} shortcut is for ${myObject[key]}`); 
// }

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
    
}