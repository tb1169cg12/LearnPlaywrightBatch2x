/*
Yeh sabse zyada use hone waala smart function hai. 

Yeh bahar se raw data (input) leta hai, uspar andar calculation/logic chalata hai,

aur ek perfect naya output bahar bhejta (return) hai.
Desi Example: 

Juicer Machine 🍊. 
Tum upar se Santra/Orange daaloge (Input), 
machine andar ghumegi (Logic), aur niche se tumhein fresh juice ka glass milega (Output)*/

// Parameter bhi hai (a, b) aur return keyword bhi hai
function calculateTotalSalary(inHand, variablePay) {
    let total = inHand + variablePay;
    return total;
}

// Chalane ka tarika: Inputs bhi do aur output ko variable mein pakdo bhi
let finalSalary = calculateTotalSalary(44000, 6000);
console.log("Total received amount: ₹" + finalSalary);
console.log("Total received amount: ₹" , finalSalary);//
// Output: Total received amount: ₹50000