//real life if else
let username = "dev";
let password = "secure123";
let isAccountLocked= true;

if(username==="dev" && password==="secure123" && isAccountLocked){
    console.log("you are allowed to enter")
}
else(
    console.log("you are not allowed to enter")
)

if(username==="dev" && password==="secure123" && !isAccountLocked){
    console.log("you are allowed to enter")
}
else(
    console.log("you are not allowed to enter")
)
//practice
let x=10;
if(x>5){
    console.log("x is big")
}
// single if allowed

if(true){
    console.log("single if allowed")
}

//single else not allowed
else{
    console.log("not allowed")
}

//print if number is odd or even

let number=6;
if (number %2===0){
    console.log("number is even")
}else{
    console.log("number is odd")
}

//student grade calculator

let marks= 120;
if(marks >=90 && marks <=100){
    console.log("you got a grade")
}
else if (marks >=80 && marks <= 89){
    console.log("u got b grade")
}
else if (marks >=70 && marks <= 79){
    console.log("u got c grade")
}
else if (marks >=60 && marks <= 69){
    console.log("u got d grade")
}
else {
    console.log("you failed")
}

//leap year

let year =2001
if((year %4 ===0 && year %100 !==0 )||year %400 === 0 ){
    console.log("its a leap year")
}else{
    console.log("not a leap year")
}

/*status code checker

Problem: Given an HTTP status code, print which category it belongs to.

200–299 → Success
300–399 → Redirection
400–499 → Client Error
500–599 → Server Error
Anything else → Invalid */

let status_code =600;
if (status_code>= 200 && status_code<=299){
    console.log("success")
}
else if(status_code>= 300 && status_code<=399){
    console.log("Redirection")
}
else if(status_code>= 400 && status_code<=499){
    console.log("Client Error")
}
else if(status_code>= 500 && status_code<=599){
    console.log("Server Error")
}
else {
    console.log("invalid")
}
/*Compare actual result with expected result and print test verdict.

Sample Input/Output:

expected = "Login Successful"
actual   = "Login Successful"
Output: ✅ Test Passed

expected = "Login Successful"
actual   = "Invalid Credentials"
Output: ❌ Test Failed — Expected: Login Successful, Got: Invalid Credentials
*/

let expected = "Login Successful"
let actual   = "Login Successful"
if (expected===actual){
    console.log("testcase passed")
}else{
    console.log("Test Failed ")
}

let expected1 = "Login Successful"
let actual1   = "Invalid Credentials"
if (expected1===actual1){
    console.log("testcase passed")
}else{
    console.log("Test Failed ")
}
/*
Bug Severity Classifier
Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low
Anything else → Invalid score*/

let impact_score =0;
if (impact_score ===9 || impact_score===10){
    console.log("Critical (block release)")
}else if (impact_score ===8 || impact_score===7){
    console.log("High)")
}
else if (impact_score <=6 && impact_score>=4){
    console.log("Medium")
}
else if (impact_score <=3 && impact_score>=1){
    console.log("Low")
}else{
    console.log("Invalid score")
}

/*Problem: Given the percentage of test cases passed in a CI build, 
report build health.
100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)*/

let test_pass_percent =100
if (test_pass_percent===100){
    console.log("Green Build")
}else if (test_pass_percent >=90 && test_pass_percent <=99 ){
    console.log("Stable (investigate failures)")
}else if (test_pass_percent >=70 && test_pass_percent <=89 ){
    console.log("Unstable)")
}else if (test_pass_percent <=70 ){
    console.log("Broken Build (block deployment)*")
}
/*
Question 5 — Login Lockout After Failed Attempts
Problem: Track failed login attempts. 
Lock the account after 3 failed attempts.
Sample Input/Output:
Input: attempts = 2
Output: 1 attempt left before lockout
Input: attempts = 3
Output: 🔒 Account Locked — Contact support
Input: attempts = 0
Output: Login successful*/
//Question 5 — Login Lockout After Failed Attempts
//let attempts = 2;
let attempts = 3;
// let attempts = 0;

if (attempts >= 3) {
    console.log("🔒 Account Locked — Contact support")
}
else if (attempts >= 2) {
    console.log("1 attempt left before lockout")
}
else {
    console.log("Login successful")
}