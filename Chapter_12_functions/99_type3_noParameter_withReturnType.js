// type3
/* Ise chalne ke liye bahar se kisi data ki zaroorat nahi hai, 
par jab yeh chalta hai, toh bahar ek keemti value/output phenk kar deta hai. 
Isme return keyword hona mandatory hai.
Desi Example: ATM Machine 🏧. 
Tumhe machine ke andar apni taraf se paise nahi daalne padte. 
Tum bas button dabate ho aur machine cash nikaal kar tumhare haath mein (return) de deti hai.*/

function sayHello(){
    console.log('hi');
    return "hello";
}
//will return nothing as no function called
let relative = sayHello() //will print hi
console.log(relative) //will print hello

console.log("---------------")

// Na koi parameter hai, par return keyword lagaya hai
function getBitcoinPrice() {
    let currentPrice = 62000; // Fixed logic/data
    return currentPrice;
}

// Chalane ka tarika: Iski value ko variable mein pakadna padega
let btc = getBitcoinPrice();
console.log("Bitcoin price is: $" + btc); 
// Output: Bitcoin price is: $62000