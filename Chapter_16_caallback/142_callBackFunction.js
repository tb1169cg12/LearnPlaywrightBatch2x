function placeOrder(item, callback) {
    console.log("Order placed: " + item);
    callback();
}
placeOrder("burger",function(){
    console.log("order is ready")
}

)



//-----new
function print(){
    console.log("normal function")
}
function placeOrder(item,callback){
console.log("hi your ordeer is placed and its a",item)//2nd
callback();//3rd
}
//ways to call this function

//1st way-anonymus function
placeOrder("burger",function(){console.log("hi")}) //1st  //4th

//here 1st burger will be assigned to item and it will print vlaue
//then callback is called and it prints hi

//2nd way
placeOrder("pizza",print)

//3rd way-arrow function

placeOrder("chowmin",()=>{console.log("yo")})