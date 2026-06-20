//call back hell or pyramid of doom

function openBrowser(callback){
    console.log("browser opened")
    callback()
}
function goToLoginPage(callback){
    console.log("login page opened")
    callback()
}
function enterCredentials(callback){
    console.log("credentials entered")
    callback()
}
function clickLogin(callback){
    console.log("login clicked")
    callback()
}

openBrowser(function(){
    goToLoginPage(function(){
        enterCredentials(function(){
            clickLogin(function(){
                console.log("test complete")
            })
        })
    })
})

//thats why we dont use multiple calllback