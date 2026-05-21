var a = 10;
console.log(a);

function printello(){
    console.log("Hello World!");
    var a = 20; 
    console.log(a);
    if (true){
        var a = 30; 
        console.log(a);
    }
    console.log("i->",a);
}
console.log("o->",a);
printello();

//since var allows redeclaration and reassignment, 
// the value of a is changed in the entire function scope. 
// earlier it was 20 but in if statment we redeclared it to 30 
//so new value will be 30 .