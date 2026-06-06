let arr=[1,2,3,4,5]
console.log(arr.slice(1,3)) //slicing goes from 1 to 3-1
//in this case  from 1st index to 3rd index -1

console.log(arr.slice(0,4)) //slice dont modify roiginal array

console.log(arr.slice(2)) //if we dont give 2nd nuber it will print till end
console.log(arr.slice(-2)) //it start from right end one is -1 then -2 and prints al to right 
console.log(arr.slice(0))// it will takr all elements
console.log(arr)

let arr1 = [10, 20, 30, 40, 50];
let removed = arr1.splice(1, 2);//splice modifies array
console.log(removed); 
console.log(arr1);