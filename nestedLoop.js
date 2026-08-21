// Nested loops pattern

let n = 4;

for(let i = 0; i < n; i++){
   let row = " ";
    for(let j = 1; j < i+1; j++){
        row += "*";
    }
  console.log(row)
}

// i = 0 → j runs 1 time → *
// i = 1 → j runs 2 times → **
// i = 2 → j runs 3 times → ***
// i = 3 → j runs 4 times → ****
