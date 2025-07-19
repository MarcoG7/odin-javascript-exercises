const fibonacci = function(num) {
    let num2 = +num;

    if (num2 < 0) {
        return "OOPS";
    }

    if (num2 === 0) {
        return 0;
    }

    if (num2 === 1) {
        return 1;
    }

    let fib =  [1, 1]
    while (fib.length != num2) {
        fib.push(fib[fib.length-1] + fib[fib.length-2]);
    }

    return fib[fib.length-1];
};

// Do not edit below this line
module.exports = fibonacci;
