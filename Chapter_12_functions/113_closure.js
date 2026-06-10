
/*this will print hello
    let message="hello"
    function inner(){
        console.log(message)
    }
    inner();
    */


function outer(){
    let message="hello"
    function inner(){
        console.log(message)
    }
    return inner;
}
let a=outer();
a();