//Default parameters for functions

function retry(testname,maxRetry,delay){
    console.log(`retrying ${testname} up to ${maxRetry} times,${delay} ms`)
}
retry("login test",3,1000);
//now we will modify this function so that if no value is given it will take default value

function retry1(testname1,maxRetry1=2,delay1=1000){
    console.log(`retrying ${testname1} up to ${maxRetry1} times,${delay1} ms`)
    console.log("retrying " + testname1 + " up to " + maxRetry1 + " times," + delay1 + " ms");//old way
}
retry1("registration test");// will print default values for arguments not given 
//now if we give values it will update default values
retry1("registration test",3,2000);