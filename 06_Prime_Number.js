// Students write their code between these lines. 
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output. 
//

// Write isPrime(num), which returns true if the number is prime and false otherwise.
function checkPrimeNum(num) {
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    if (num <= 1) return messageFormatter(num, false);
    if (num % 2 === 0 && num > 2) return messageFormatter(num, false);
    const s = Math.sqrt(num);
    for (let i = 3; i <= s; i += 2) {
        if (num % i === 0) return messageFormatter(num, false);
    }
    // students must use polymorphic messageFormatter function to display answer
    return messageFormatter(num, true);
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Extend with findPrimesInRange(start, end) to return all prime numbers within a specified range.
function findPrimesInRange(start, end) {
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    const list = [];
    
    if (!Array.isArray(start) || start.length !== 2 || typeof start[0] !== 'number' || typeof start[1] !== 'number') {
        return messageFormatter('invlaid', false);
    }

    const [astart, aend] = start;     // i had to add this code becuase idk if this is typo from instructor or not , findPrimesInRange(start,end) 2 parameters are given but in line 88 and 91 only one value is given as array [number,number]


    for (let i = astart; i <= aend; i++) {
        if (checkPrimeNum(i).includes('is a prime number')) {
            list.push(i);
        }
    }

    // students must use polymorphic messageFormatter function to display answer
    return messageFormatter(list, true);
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Polymorphic messageFormatter function
function messageFormatter(input, result) {
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    if (typeof input === 'number') {
        if (result) {
            return `${input} is a prime number.`;
        } else {
            return `${input} is NOT a prime number.`;
        }
    }

    if (Array.isArray(input)) {
        if (input.length === 0) {
            return 'No prime numbers found in this list';
        } else {
            return `Primes between ${input[0]} and ${input[1]}: [${input.join(', ')}]`;
        }
    }

    if (input === 'invlaid') {
        return 'Invalid input. Please provide a number or a valid range (array of two numbers).';
    }
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Instructor's test cases
// ===== ===== ===== ===== =====
console.log(checkPrimeNum(2));
// Expected Output: 2 is a prime number.

console.log(checkPrimeNum(1));
// Expected Output: 1 is NOT a prime number.

console.log(checkPrimeNum(13));
// Expected Output: 13 is a prime number.

console.log(checkPrimeNum(25));
// Expected Output: 25 is NOT a prime number.

console.log(findPrimesInRange([10, 20]));
// Expected Output: Primes between 10 and 20: [11, 13, 17, 19]

console.log(findPrimesInRange([30, 50]));
// Expected Output: Primes between 30 and 50: [31, 37, 41, 43, 47]

console.log(findPrimesInRange('test'));
// Expected Output: Invalid input. Please provide a number or a valid range (array of two numbers).
//happy coding!! 6604133
