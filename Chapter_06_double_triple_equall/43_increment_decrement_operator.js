let b=10; //new value of b is 11
let a= ++b;  //first a will be assigned then new vlaue of a is also 11
console.log(a) //11
console.log(b) //11

let c=10; //c value is 10
let d=c++; // d will be assigned 10 and then c will be increment by 1
console.log(d)
console.log(c)


console.log("new")
let z=10;
console.log(++z + z); // 11 + 11

console.log("new")
let y=10;
console.log(y++ + y);// 10 +11


let x=10;
console.log(x++ + ++x)// 10 + 12
console.log(x)
let p=10;
console.log(++p + p++)// 11 + 11
console.log(p)

let q = 5;
console.log(q++ + ++q - --q + q-- + ++q);//5 + 7 - 6 + 6 +6) =12 -6 +12=18
console.log(q)

