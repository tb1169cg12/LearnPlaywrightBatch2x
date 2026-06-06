let a=[1,2];
let b=[3,4];
let c=a+b
console.log(c)

console.log("---------")
//proper way to concat
let d=a.concat(b);
console.log(d)
console.log("------")
//modern way of concat
let e=[...a,...b];
console.log(e)

console.log("------")
let s =["pass","fail","skip"].join("-")
console.log(s)

console.log("------")
let t =["pass","fail","skip"].join("")
console.log(t)