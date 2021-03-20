// Only change code below this line
function sumFibonacci(num) {
    var a = 0;
    var b = 1;
    var sum = 0;

    while (b <= num) {
        if (b % 2 !==0) {
            sum += b;
        }
        b += a;
        a = b - a;
    }
    return sum;
}
// Only change code above this line

console.log(sumFibonacci(1)); // Change this line
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;