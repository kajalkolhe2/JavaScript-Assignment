let a = 10, b = 20;
console.log(a + b, a - b, a * b, a / b, a % b);

if (a > b) {
    console.log("a is greater than b");
} else {
    console.log("a is not greater than b");
}

switch (a) {
    case 10:
        console.log("a is 10");
        break;
    default:
        console.log("a is not 10");
}

console.log("for loop demo print 1 to 5")
for (let i = 0; i < 5; i++) {
    console.log(i);
}
console.log("for loop ends");

console.log("while loop staets");
let j = 0;
while (j < 5) {
    console.log(j);
    j++;
}
console.log("while loop end");
console.log("do while loop starts");

let k = 0;
do {
    console.log(k);
    k++;
} while (k < 5);
console.log("do while loop end");