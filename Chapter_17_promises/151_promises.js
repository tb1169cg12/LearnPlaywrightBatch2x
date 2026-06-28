let order =new Promise(function(resolve,reject)
{
    let foodready=true;
    if (foodready){
        resolve("piza is delivered")
    }else{
        reject("rder cancelled")
    }
})
console.log(order)


//-------

let x = new Promise (function (resolve,reject){
    let y=true;
    if (y){
        resolve("food ready")
    }
    else{
        reject("food not ready")
    }
})
console.log(x)

//------------
let apicall=new Promise(function(resolve,reject){
    resolve({status:200,body:"user data "})
})
apicall.
then(function(response){
    console.log(response.status)
}).catch(function(reject){
    
})