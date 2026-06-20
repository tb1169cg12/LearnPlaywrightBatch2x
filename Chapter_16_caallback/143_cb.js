function cafe(item,callWhenTableIsReady){
    console.log("finding table....1")
    console.log("finding table....2")
    console.log("finding table....3")
    callWhenTableIsReady()
}
function callWhenTableIsReady(){
    console.log("calling on your number")
}

cafe("burger",callWhenTableIsReady)

//we can also tell to use different function in callback

cafe("piza",function (){console.log("call on diff number")})

//we can also  print using arrow function

cafe("momo",()=>{console.log("hmmm")})