let config={};
//we can add values in object later also
config.browser="chrome";
config.timeout="2000";
config.testname="login test"


//now when we print object it will print all valuses added latr
console.log(config)

console.log(config.browser)
//-------------------------
if(config.browser==="chrome"){
    console.log("i will execute my test case")
}

//we can also dleate key

delete config.browser
//now browser wont be printed
console.log(config)