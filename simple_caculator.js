class SimpleCalculator {
    constructor() { }

    // Polymorphic function to perform arithmetic calculations
    calculate(operation, num1, num2) {
        if (typeof num1 === 'number' && typeof num2 === 'number'){
            if (operation === "add"){
                return num1 + num2;
            }else if (operation ==='subtract'){
                return num1 - num2;
            }else if (operation ==='multiply'){
                return num1 * num2
            }else if (operation ==='divide'){
                if (num2 === 0){
                    return ("Cannot divided by 0")
                }else{
                    return Math.floor(num1 / num2)
                }
            }else if (operation === 'modulus'){
                return num1 % num2
            }else{
                return("unknown operation")
            }
        }else{
            return('Invalid input: num1 and num2 must be numbers')
        }
        // Write function description 
        //simple 
        // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    
        // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
    }
}

// Instructor's test cases
// ===== ===== ===== ===== =====

const calculator = new SimpleCalculator();

console.log(calculator.calculate('add', 5, 3));       
// Expected Output: 8
console.log(calculator.calculate('subtract', 10, 4)); 
// Expected Output: 6
console.log(calculator.calculate('multiply', 6, 7));  
// Expected Output: 42
console.log(calculator.calculate('divide', 8, 2));    
// Expected Output: 4
console.log(calculator.calculate('divide', 9, 2));    
// Expected Output: 4
console.log(calculator.calculate('divide', 8, 0));    
// Expected Output: Cannot divide by zero
console.log(calculator.calculate('modulus', 8, 3));       
// Expected Output: 2
console.log(calculator.calculate('add', 5, 'three')); 
// Expected Output: Invalid input: num1 and num2 must be numbers
