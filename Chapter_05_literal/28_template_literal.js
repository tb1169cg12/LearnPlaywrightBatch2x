let first_name = "pramod";
let full_name = `hi ${first_name} dutta`;
console.log(full_name);  // Output: hi pramod dutta

let env = "staging";
env = "production"; 
let userid = 12345;
let apiurl = `https://${env}.app.vwo.com/user/${userid}`;
console.log(apiurl);  // Output: https://staging.app.vwo.com/user/12345