//type 2 -with argument and no return type

/*

🎁 2. With Parameter, Without Return Type (Sirf Seva)
Ise chalne ke liye bahar se input (data) chahiye, par yeh apna kaam karke chup baith jata hai,
 bahar kuch return nahi karta.
Desi Example: Shaadi ka Lifafa 🧧. 
Tumne lifafe mein ₹500 daal kar dulhe ko de diye (input). 
Dulhe ne lifafa rakh liya aur bolega "Thank You". 
Badle mein tumhein turant kuch wapas nahi milega.
*/

function greetUsername(name){
    console.log("welcome" ,name)
}
greetUsername("rahul")


console.log("---------------")

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
