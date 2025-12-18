// const coding = ["js", "ruby", "java", "python", "cpp"]

// const values = coding.forEach( (tiem) => {
//     console.log(item);
// })
// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums);

// const newN


const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumbers.map( (num) => { return num +10})
const newNums = myNumbers
               .map( (num) => num * 10 )
               .map( (num) => num + 1)
                .filter( (num) => num >= 40)
console.log(newNums);
