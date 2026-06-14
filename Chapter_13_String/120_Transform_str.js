let str =" Hello,World ";
console.log(str)
console.log("upper case-"+str.toUpperCase());
console.log("lower case-"+str.toLowerCase());
console.log(str.trim()) //will remove spaces

let msg ="test: fail . retry: fail.";
console.log(msg.replace("fail","pass"))//will replace only 1st time
console.log(msg.replaceAll("fail","pass"))//will replace everywhere
console.log(msg.replace(/fail/g,"yo"))//where ever fidn replace

//concatination

//"hello" + " " + "world"
console.log("hello".concat(" ","world"))
console.log(`${"hello"} ${"world"}`)

let url= "https://app.vwo.com?app=pramod";
console.log(url.replace(/app/g,"qa"))

console.log("pass,fail,skip".split(","))//splt will create array
let rr = "test_login_pass".split("_").join(" ");
console.log(rr)

let parts=["2024","2025","2026"];
let date =parts.join("-")
console.log(date)