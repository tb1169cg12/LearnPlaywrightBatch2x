let student1 ={ name:"amit",age: 65}
let student2 ={ name: "pramod"}
let student3 ={ name: "pramod",age:87,phone:1234567}
//---------------new------------
let a = {status: "pass"};
console.log(a)
console.log(a.status)
//or we can also write as 
console.log(a["status"])
let b=a;
console.log(b)
console.log(b.status)

//-----new------copy by refrence-----
console.log("-----new------")
let c={status: "pass"}
console.log("value of c status is ",c.status)
let d=c;
console.log("value of d status is",d.status)
//now if change value of d
d.status="fail"
//then value of c will also change
console.log("new value of c status is ",c.status)
console.log("new value of d status is",d.status)
