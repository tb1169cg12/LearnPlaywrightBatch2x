console.log(0=="") //loose comparison true 
console.log(0=="0") //loose comparison true
console.log(""=="0") //transitive broken 0 is blank but balnk is not 0
console.log(""==0) //strict comparison true
console.log("new")
console.log(0==false) //loose comparison true
console.log(null==0) //strict comparison false
console.log(null==undefined) //loose comparison true
console.log(0==null) //strict comparison false

console.log(5!="5") //loose comparison false;
console.log(5!=="5") //strict comparison false 
console.log("hey ") //loose comparison false
let a ='true';
let b= 'false';
console.log(a && b) //loose comparison false
console.log(a || b) //strict comparison false




