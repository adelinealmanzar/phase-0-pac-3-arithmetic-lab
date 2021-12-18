number = 10;

function add() {
    return number += 5; //=> 15
}

function subtract() {
    return number -= 5; //=> 10
}

function multiply() {
    return number *= 5; //=> 50
}

function divide() {
    return number /= 5; //=> 10
}

function add(a, b) {
    return (a += b);
}

function subtract(a, b) {
    return (a -= b);
}

function multiply(a, b) {
    return (a *= b);
}

function divide(a, b) {
    return  (a /= b);
}

function increment(a) {
    a++;
    return a;
}

function decrement(a) {
    a--;
    return a;
}

function makeInt(a) {
    const result = parseInt(a, 10);
    return result;
}

function preserveDecimal(a) {
    const result = parseFloat(a);
    return result;
}
