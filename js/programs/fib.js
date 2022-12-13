function factorial(n) {
    if (n < 0) {
        return n
    }

    // if number is 0
    else if (n === 0) {
        return 1;
    }

    // if number is positive
    else {
        let fact = 1;
        for (i = 1; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}

factorial(10);