function getStatus (code) {
if (code >= 200 && code < 300)
return "success";
if (code >= 400 && code < 500)
return "client error";
if(code >= 500) 
    return "server error";
}
let r = getStatus(200)
console.log(r)

//-------new--------
console.log("----------new--------")

function logTest(name) {
    console.log(`Running: ${name}`);
    // no return statement
} 
logTest("success")

//-------new--------
console.log("----------new--------")

greet("mamu")

function greet(name){
    return `hello ${name}`
}