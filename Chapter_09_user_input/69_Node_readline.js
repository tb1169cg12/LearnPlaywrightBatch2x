//never use

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("enter a number : ",(input)=>{
let num =Number(input);
if (num %2===0){
    console.log(num + "is even")
}else {
    console.log(num + "is odd")
}



rl.close();
});
