a = 5
b = 10


function add(a, b) {
    return a + b;
}

const addArrow = (a, b) => a + b;

console.log(`sum of ${a} and ${b} is `, add(a, b));
console.log(`sum of ${a} and ${b} is `, addArrow(a, b)); 