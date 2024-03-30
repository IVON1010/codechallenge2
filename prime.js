function primeNumbers(num) {
    if (num <= 1) {
        return false
    }

    // Check if any number between 2 and num - 1 can divide num.
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; 
            // If divisible by any other integer, it is not prime.
        }
    }
    return true; 
    // If not divided by any other number, prime
}

function findPrimeNumbers(numbers) {
    let result = [];
    // Iterate through each number in the array
    for (let i = 0; i < numbers.length; i++) {
        // Add the integer to the result array if it is prime.
        if (primeNumbers(numbers[i])) {
            result.push(numbers[i]);
        }
    }
    return result;
}

let inputArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isPrimeNumbers = findPrimeNumbers(inputArray);
console.log(isPrimeNumbers);