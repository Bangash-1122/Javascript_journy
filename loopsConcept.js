//Inverted tringle

let n = 4;

for (let i = 0; i < n; i++) {
    let row = "";

    // spaces
    for (let j = 0; j < i; j++) {
        row += "  ";
    }

    // numbers
    for (let j = 0; j < n - i; j++) {
        row += i + 1;
    }

    console.log(row);
}

// 1111
//  222
//   33
//    4
