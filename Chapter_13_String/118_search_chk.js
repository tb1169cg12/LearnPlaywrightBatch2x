let url="https://staging.vwo.com/api/login?retry=true";
console.log(url.includes("staging"));
console.log(url.includes("production"));
console.log(url.startsWith("https"))

console.log(url.endsWith("true"))
console.log(url.indexOf("a"))
console.log(url.lastIndexOf("a"))

console.log(url.lastIndexOf("zzz"))//does not exist

console.log(url.search(/login/))//regrex  it will check if link contain login and find index of 1st word