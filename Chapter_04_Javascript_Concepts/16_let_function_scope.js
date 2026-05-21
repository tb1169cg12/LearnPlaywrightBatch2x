let a=10;
console.log(a);

function test(){
    console.log("hello world");
    let a=20;
    console.log(a);
    if  (true){ 
        let a=30;
        console.log(a);
    }   
    console.log("i->",a);//this will print 20 becasue it wont work outside function 
}
console.log("o->",a);
test();