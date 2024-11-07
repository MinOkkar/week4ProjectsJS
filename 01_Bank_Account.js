// Students write their code between these lines. 
//
// Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
//
// Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
//
// Stuents should carefully read the test cases for the correct output. 
//

// Mock Data 
let balance = 5000;
let transactionHistory = ['Deposited 10000 into Savings Account', 'Withdrawn 5000 from Savings Account'];

function getBalance() {
    // Write function description 
    //simply output the balance
    // log the balance 
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    outputt = (`balance ${balance}`)
    return outputt;


    
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function deposit(amount) {
    // Write function description 
    //depoist the amount added to the history array
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    balance += amount;
    console.log(`Deposited ${amount}`);
    transactionHistory.push(`Deposited ${amount} into Savings Account`);
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function withdraw(amount) {
    // Write function description 
    //check if the amount is low or not , else withdrawn into balance and push into the array
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    if (balance < amount){
    return ("amount too low!");
    }else{
    balance -= amount
    console.log(`withdrawn ${amount}`);
    transactionHistory.push(`withdrawn ${amount} from Savings Account`);}
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

function getTransactionHistory() {
    // Write function description 
    // since history is array make variable and loop the array and then seprate the line with \n
    // Code below this line vvvvv vvvvv vvvvv vvvvv vvvvv
    history = `Transaction History \n`

    for (let i = 0; i < transactionHistory.length; i++) {
        history += `${i + 1}) ${transactionHistory[i]}\n`;
      }
      return history;
    // Code above this line ^^^^^ ^^^^^ ^^^^^ ^^^^^ ^^^^^
}

// Instructor's test cases
// ===== ===== ===== ===== =====

console.log(getBalance());
// Expected Output: 5000

deposit(4000);
console.log(getBalance());
// Expected Output: 9000

withdraw(3000);
console.log(getBalance());
// Expected Output: 6000

console.log(getTransactionHistory());
/* Expected Output:

Transaction History
1) Deposited 10000 into Savings Account
2) Withdrawn 5000 from Savings Account
3) Deposited 4000 into Savings Account
4) Withdrawn 3000 from Savings Account

*/
// happy coding!!!! 6604133
