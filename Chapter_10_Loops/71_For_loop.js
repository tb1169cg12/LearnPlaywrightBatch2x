/*FOR(I,C,U)
I Initialisation
C condition
U updation*/

for(let i=0;i<10;i++){  //for(I;C;U)  // here let scopre { } k andar tak hi rehga i ka value
console.log(i)
}
console.log("new program")
for(let i=0;i<10;++i){
console.log(i)
}
console.log("new program")
/* 
for(const k=0;k<10;++k){ //this will fail as k is assigned a fixed value 0 which cannt change while runing loop
console.log(k)
}*/
for(var k=0;k<10;++k){//cariable is global function so it will rint value outside bracket also
console.log(k)}

console.log(k)




