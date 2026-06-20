async function openBrowser(callback){
    await setTimeout(function(){
        console.log("step 1 chrome browser opened");
        if(callback) callback();
    },500);
}
openBrowser(function(){
    console.log("callback executed after browser opened");
})