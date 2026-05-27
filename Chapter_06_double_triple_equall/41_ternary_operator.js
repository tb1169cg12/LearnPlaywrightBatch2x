let rajkumar_age = 18;

let rj_will_go_goa = rajkumar_age >= 18 ? "yes" : "no";

console.log(rj_will_go_goa);  // Output: no


let actual_result = 200
let expected_result = 200

let test_resut = actual_result === expected_result ? "test passed" : "test failed";
console.log(test_resut);  // Output: test passed

let environment = "staging";
let base_url=environment === "prod" 
?"https://api.example.com"
: "https://staging-api.example.com";   
console.log(base_url);  // Output: https://staging-api.example.com 

let isCI= true;
let browsermode = isCI ? "headless" : "headed";
console.log("launching browser in " , browsermode ,"mode" );  // Output: headless

let response_time = 850;
let sla=1000;
let sla_status = response_time <=sla ? "within SLA" : "SLA breached";
console.log(`response : ${response_time} ms-${sla_status}`);  // Output: within SLA

//nested ternary operator

let status_code = 404;
let category = status_code <300 ? "success"
      : status_code <400 ? "redirection" 
         : status_code <500 ? "client error": "server error";
console.log(`status : ${status_code} : ${category}`);  // Output: client error



let age =26;
let is_pramod_goa = age >=18 ? "yes" : "no";
console.log(is_pramod_goa);  // Output: yes

//nested ternary operator in ternary

let age_pramod =10 ;
let will_pramod_drink = age_pramod >=18 ? (age_pramod >=18 ? "will drink" :"will not drink") : "goa false";
console.log(will_pramod_drink);  // Output: will not drink


//greates of 2 numbers
let number1 =20;
let number2 =20;
let greater_number = number1 > number2 ? "number1 is greater" 
                    :number2 >number1 ?"number 2 is grater"
                    : "both numbers are equal";
console.log(greater_number);  // Output: both numbers are equal


//greates of 3 numbers
let num1 = 1;
let num2 = 2;
let num3 = 3;

let greatest_number_new = (num1>num2 && num1>num3)? " number1 is greater":
                          (num2>num3 && num2>num1) ? "number 2 is greater" :
                          (num3>num1 && num3>num2) ?"number3 is greater " :"all are equal"
console.log(greatest_number_new);  // Output: number 2 is greater