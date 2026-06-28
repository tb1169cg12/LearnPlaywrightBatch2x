let testRun =new Promise(function (resolve,reject){
    reject("assertion failed")
})

testRun.
then(function(data){
    console.log(data)
})
.catch(function(data){
    console.log(data)
})
.finally(function(data){
    console.log("yay")
})