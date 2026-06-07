//types of functions -
//1.basic function -no parameter no return type

/*
Yeh woh function hai jise chalne ke liye bahar se koi maal 
(input) nahi chahiye, aur yeh apna kaam khud hi andar khatam kar leta hai,
 bahar kuch wapas (output) nahi phenkta.
Desi Example:

Ghar ka Doorbell 🔔. Button dabao, woh bajega aur baat khatam. 
Use na kuch dena hai, na woh badle mein kuch laakar dega. */

// Na koi parameter hai andar, na return keyword hai
function sayGoodMorning() {
    console.log("Good Morning Bhai!");
}
// Chalane ka tarika: Khali brackets ke sath call karo
sayGoodMorning(); 
// Output: Good Morning Bhai! Mast Saturday hai aaj.









console.log("----------")
function  greet(){    //no argument 
    console.log("hi");
                        //no return type
}
greet()
let a= greet();   ///we are using this to print value
console.log(a)  //value of a will be undefined











/* ignore , just for practice
console.log("---------------")
//function with parameter and argument
function aadhar(name,age){  //here paramenter is name,age
    console.log(name + age)
} 
aadhar("rahul",26)  //here argument is rahul 26

console.log("---------------")
//function with parameter and argument using return
function add(a,b){  //parameter a,b
    return a+b
}
add(1,1) //argument 1,1

let sum = add(1,1) //we are using these to return value
console.log(sum)

console.log("---------------")
*/