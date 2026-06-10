// Higher-Order Function (The Boss Function)
// It takes a function as an argument (testFn) and a string (testName)
function runWithLogging(testFn, testName) {
    console.log(`Starting: ${testName}`);
    
    // Executing the passed function and storing its return value
    let result = testFn(); 
    
    console.log(`Finished: ${testName} -> ${result}`);
    return result;
}

// Normal Function 1 (Employee 1)
function loginTest() {
    return "pass";
}

// Normal Function 2 (Employee 2)
function loginTestFAILED() {
    return "fail";
}

// Calling the Higher-Order Function with different arguments
runWithLogging(loginTest, "Login Test");
runWithLogging(loginTestFAILED, "Dashboard Failed Test");