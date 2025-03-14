// const readline = require('readline');

// // Set up the input/output interface
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // Ask for user input
// rl.question('Enter something: ', (userInput) => {
//   console.log('You entered:', userInput);
//   rl.close(); // Close the interface after getting the input
// });


n1=0
n2=1
n3=0
for(let i=0;i<=10; i++){
    n3=n1+n3
    console.log(n3)
    n1=n2
    n2=n3
}