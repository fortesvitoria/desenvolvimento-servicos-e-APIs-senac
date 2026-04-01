const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your name?`, name => {
    rl.question(`What's your age?`, age => {
        console.log(`Hi ${name}!`);
        console.log(`you are ${age} years old!`);
        rl.close();
    });

});

