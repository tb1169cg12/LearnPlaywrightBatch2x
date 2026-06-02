//dont use  -gives 100s of error while runing in output window

const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

if (num % 2 === 0) {
    console.log(num + " is Even");
} else {
    console.log(num + " is Odd");
}

// WRITE node Chapter_09_user_input/70_Promt_sync.js in terminal window to get input