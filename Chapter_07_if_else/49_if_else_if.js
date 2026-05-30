let age=21;
if (age<21){
    console.log("<21");
}else if(age>21){
    console.log(">21");
}else if(age=21){
console.log("21");
}else{
    console.log("yo");
}


let isloggedin = true;
let user_role="editor";

if(isloggedin){
    if(user_role==="admin"){
        console.log("admin can do all things")

    }
    else if(user_role==="editor"){
        console.log("welcome editor")
    }
}else{
    console.log("please login")
}