async function openBrowser(callback){
    await setTimeout(function(){
        console.log("step 1 chrome browser opened");
        if(callback) callback();
    },500);
}
openBrowser(function(){
    console.log("callback executed after browser opened");
})

//-------------------------
function greetTester(name,callback){
    console.log("welcome,"+ name);
    callback();
} 
greetTester("dev",function(){
    console.log("lets start testing");
})
//--------------
