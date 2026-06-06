let arr=[1,2,3]
arr.push(4,5,6)
console.log(arr)

arr.splice(2,2)  ///remove 2 element startig from index no 2
console.log(arr)

arr.splice(2,0,10)//dont deleat , add 10 on 2nd index place
console.log(arr)


arr.splice(2,1,12)//remove 1 element on 2nd index and add 12 to it
