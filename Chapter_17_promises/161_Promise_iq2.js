let T1=Promise.resolve("login pass")
let T2=Promise.resolve("search pass")
let T3 =Promise.resolve("logout pass")
Promise.all([T1,T2,T3]).then(function(result)
{
    console.log(result)
})

//--------
let t1=Promise.resolve("pass")
let t2=Promise.reject("fail")
let t3=Promise.resolve("pass")

Promise.all([t1,t2,t3])
.then(function(r){console.log(r)})
.catch(function(s){console.log(s)})