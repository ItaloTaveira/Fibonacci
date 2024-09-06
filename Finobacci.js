
let num = parseInt(window.prompt("Digite um número: "), 10);
function checkFibonacci(num) {
    if (num < 0) return false; 
    let a = 0, b = 1;
    
    if (num === 0 || num === 1) return true;

    while (b < num) {
        let temp = a;
        a = b;
        b = temp + b;
    }
    return b === num;
}
if (checkFibonacci(num)) {
    console.log(`${num} pertence à sequência de Fibonacci.`);
} else {
    console.log(`${num} não pertence à sequência de Fibonacci.`);
}
