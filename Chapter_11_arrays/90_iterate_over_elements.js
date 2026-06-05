let test1 =["login","checkout","search"]

for(let i=0;i<test1.length;i++){
console.log(test1[i])
}

console.log("-------")

for (test of test1){  //test can be replaced with any name its not fixed
    console.log(test)
}


console.log("-------")
//print with index value

test1.forEach((test,index)=>{//test can be replaced with any name its not fixed
    console.log(test,index);
})

console.log("-------")
let students =["methis","senthil","ayay","rahul"]
for (let student in students){
    console.log(student,"->",students[student])
}
