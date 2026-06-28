let apiCall = new Promise(function(resolve,reject){
    resolve({ status:200,body:"user data"})
})

apiCall.then(function(response){
    console.log(response.status);

})