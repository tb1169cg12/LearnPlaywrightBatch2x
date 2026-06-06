//sorting with help of 1st character

let fruits=["apple","cherry","banana"]
fruits.sort();
console.log(fruits)


let numbers =[2,3,9,1,3,6];
numbers.sort();
console.log(numbers)

let nums =[10,1,21,6]
nums.sort();
console.log(nums);//natural shorting or lexical shorting

nums.sort((a,b)=>a-b);
console.log(nums);//properly shorted based on number system(ascending)


nums.sort((a,b)=>b-a);
console.log(nums);//properly shorted based on number system(decending)