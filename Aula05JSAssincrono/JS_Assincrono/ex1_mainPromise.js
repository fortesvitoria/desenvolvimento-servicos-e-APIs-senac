const readline = require('node:readline/promises');
async function main() {
    const rl = readline.createInterface({
      input: process.stdin,
        output: process.stdout,
    });

    let name = await rl.question(`What's your name? `);

    let age = await rl.question(`What's your age? `);
    console.log(`Hi ${name}!`);

    console.log(`you are ${age} years old!`);
    rl.close();
    return name;
}

main();

console.log("\nThis is the end of the program!");