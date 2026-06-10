// if (ourStatusCode >= 200 && ourStatusCode < 300)
//normal function
function validatestatuscode(statuscode){
    if (statuscode>=200 && statuscode<300){
        console.log("request is fine")
    }else{
        console.log("not fine")
    }
}
validatestatuscode(180)

//--------------------------new program--------------------------------//
//arrow function
console.log("-------------new program--------")

const validatestatuscd =(statuscd) =>{
    if (statuscd>=200 && statuscd<300){
        console.log("request is fine")
    }else{
        console.log("not fine")
    }
}
validatestatuscd(200)
//--------------------------new program--------------------------------//
//function as an expression
console.log("-------------new program--------")

const validateStatusCode_ex = function(statuses){
     if (statuses>=200 && statuses<300){
        console.log("request is fine")
    }else{
        console.log("not fine")
    }
}
validateStatusCode_ex(200)

//--------------------------new program--------------------------------//
//ai example-1st one normal function
console.log("-------------new program--------")
function multiply(a,b){
    return a*b;
}
console.log(multiply(2,3))  // we need concole .log to multiply when we have return in function
//---------new--------
console.log("-------------new program--------")
function multiply1(c,d){
    console.log(c*d)
}
multiply1(2,3)   // here we didnt have return so it printed directly
//--------------------------new program--------------------------------//
console.log("-------------new program--------")
//ai example-2nd one Function as an Expression
const multiplyexpresssion= function(e,f){
    return e*f
}
console.log(multiplyexpresssion(5,5))
//--------------------------new program--------------------------------//
console.log("-------------new program--------")
//ai example-3rd Arrow Function
const multipli =(x,y)=>(x*y);
console.log(multipli(2,3));