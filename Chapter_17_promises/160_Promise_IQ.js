let p = new Promise(function(resolve,reject){
    resolve(42);

})
p.then(function(value){
    console.log("answer:",value)
})

//------
let a = new Promise(function(resolve,reject){
    reject("something broke")
})
a.catch(function(err){
    console.log("catch",err)
})
//-------
let b = new Promise(function(resolve,reject){
    resolve(42)

})
b.then(function(value){
    console.log("answer",value)
})
//-------
let c = new Promise(function(resolve,reject){
reject(33)
})
c.catch(function(z){
    console.log(z)
})

//-----------
Promise.resolve(1)
.then(function(value){
    console.log(value);
    return value+1
})
.then(function(value){
    console.log(value);
    return value+1
})
.then(function(value){
    console.log(value);
    return value+1
})
//--------------------------------------
Promise.resolve("start")
.then(function(val){
    console.log(val)
    throw new Error("broke at step 2");
})
.then(function(){
    console.log("this will not run")
})
.catch(function(err){
    console.log("caught",err)
});
//------------------------
Promise.reject("test fail")
.then(function(data){
    console.log("data:",data)
})
.catch(function(err){
    console.log("error",err)
})
.finally(function(){
    console.log("cleanup done")
})
//-----------
Promise.resolve("quick pass").then(function(msg){
    console.log(msg)
})
Promise.reject("quick fail").catch(function(msg){
    console.log(msg)
})