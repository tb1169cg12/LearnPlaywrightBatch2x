function add(a,b,c){
    return a+b+c;
}
let num =[1,2,3]
console.log(add(...num))

let responsecodes=[200,300,404]
function haserror(...codes){
    return codes.some(c=>c>=400);
}
haserror(...responsecodes)
