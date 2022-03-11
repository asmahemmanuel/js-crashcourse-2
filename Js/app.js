let a = 10;
let b = 6;


// basic operators
console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);
console.log(a % b);


// urinary operator

console.log(a++);
console.log(a);
console.log(++a);
console.log(--a);
console.log(a);
console.log(--a);


// comparison
// ley a = 10
// let b = 6

let c = "10";
console.log(a < b);
console.log(a > b);
console.log(a == b);
console.log(a === c);

// control flow

let score = 63

if (score >= 80) {
    console.log("You had A");
} else if (score >= 75) {
    console.log("You had B+");
} else if (score >= 70) {
    console.log("You had B");
} else if (score >= 65) {
    console.log("You had C+");
} else if (score >= 60) {
    console.log("You had C");
} else if (score >= 55) {
    console.log("You had D+");
} else if (score >= 50) {
    console.log("You had D");
} else {
    console.log("Fail !");
}

const gender = " "
switch (gender) {
    case "Male":
        console.log('Go to the male washroom');
        break;
    case "Female":
        console.log('Go to the female washroom');
        break;


        default:
            console.log('No washrooom for you');
            break; 
}


for (let count = 1; count < 10; count++) {
    console.log(count);
}

let count = 1

while (count < 10) {
    console.log(count);
    count++;
}

