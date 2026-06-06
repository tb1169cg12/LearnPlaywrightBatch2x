//type 2 -with argument and no return type

function greetbyname(name){  //parameter
    console.log(name)
}
greetbyname("rahul")  //argument 
let result = greetbyname("amit")  //this will also get printed automaticaly
console.log(result)  //this will give undefined error

console.log("---------------")

function begger(money){
    console.log("thanks", money)
}
let returnsomething= begger(100)
console.log(returnsomething)
