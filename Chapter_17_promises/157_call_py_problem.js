function openBrowser(){
    return new Promise(function(resolve){
        resolve("open the browser")
    })
}

function goToLogin(){
    return new Promise(function(resolve){
        resolve("login page loaded")
    })
}

function enterCredentials(){
    return new Promise(function(resolve){
        resolve("credentials entered")
    })
}
function loginSuccessfull(){
    return new Promise(function(resolve){
        resolve("successfully loggedin")
    })
}
//-----------

openBrowser().
then(function(mdg){
    console.log("step1",mdg)
    return goToLogin()
})
.then(function(mdg){
    console.log("step2",mdg)
    return enterCredentials()
})
.then(function(mdg){
    console.log("step3",mdg)
    return loginSuccessfull()
}).catch(function(error){
    console.log("error:",error)
}).finally(function(){
    console.log("done execution")
})