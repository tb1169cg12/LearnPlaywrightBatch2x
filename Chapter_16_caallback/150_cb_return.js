function calculate(a,b,operation){
return operation (a,b);
}

let sum=calculate(10,5,function(x,y){
    return x+y
});
console.log(sum)
//---------pyramid of doom
function step1(callback){
    console.log("open browser");
    callback();

}

function step2(callback){
    console.log("navigate to page");
    callback();
    
}
function step1(callback){
    console.log("click button");
    callback();
    
}

step1(function(){
    step2(function(){

    })
})