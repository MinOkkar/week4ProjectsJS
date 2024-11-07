class NumberChecker {
    constructor(input) {
      this.input = input;
    }
  
    // Polymorphic function to check if numbers are odd or even
    checkOddEven(input) {
      // Write function description

      //first we check if this is a number than we divide by 2 , if remainder 0 is true we even odd else ood
      //second check if array , if then we double check if array values are number or string , if number we insert eacg value into check with arrowfunction simillar to single number.
     // else we discard and output "invlaid"

      // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
      // check number
      if (typeof input === "number") {
        return input % 2 === 0 ? "Even" : "Odd";
      }
      //check array
       else if (Array.isArray(input)) {
        return input.map((num) => {
          if (typeof num === "number") {
            return num % 2 === 0 ? "Even" : "Odd";
          } else {
            return "Invalid input";
          }
        });
      } 
      else {
        return "Invalid input";
      }
    }
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
  }
  
  // Instructor's test cases
  // ===== ===== ===== ===== =====
  
  const numberChecker = new NumberChecker();
  
  console.log(numberChecker.checkOddEven(5));
  // Expected Output: Odd
  console.log(numberChecker.checkOddEven(10));
  // Expected Output: Even
  console.log(numberChecker.checkOddEven([3, 5, 7, 10]));
  // Expected Output: ['Odd', 'Odd', 'Odd', 'Even']
  console.log(numberChecker.checkOddEven("Hello"));
  // Expected Output: Invalid input
