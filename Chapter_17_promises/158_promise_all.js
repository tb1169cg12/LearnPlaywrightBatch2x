let checkAuth =Promise.resolve("auth ok")
let checkDB =Promise.resolve("DB ok")
let checkCashe = Promise.resolve("cashe ok")

Promise.all([checkAuth,checkDB,checkCashe]).then(function(results){
    console.log("all checks are fine")
})

Promise.all([
    Promise.resolve("ok"),
    Promise.reject("db down"),
    Promise.resolve("ok")
]).then(function(r){
    console.log(r);
}).catch(function(error){
    console.log(error)
})

