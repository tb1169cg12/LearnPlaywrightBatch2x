function test(testname,callback){
    console.log(testname);
    callback();
}
//invisible-import{test} from '@playwright/test';
test("verify login page working",()=>{console.log("yes")})