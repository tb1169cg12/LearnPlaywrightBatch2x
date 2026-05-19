var a=10;  //global scope
console.log(a);

function printhello(){
    console.log("Hello World!");
    var a=20;
    console.log(a);  
    if(true) {
        ///local scope-reassigned value
        var a=30;
        console.log(a);
    }
}

printhello();