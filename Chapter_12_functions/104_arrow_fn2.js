//old way

function doubleMoney(amount) {
    return amount * 2;
}
console.log(doubleMoney(2))

//------------------or-----------------------------//
console.log("-----")
//new way

const doublemoney = (amount1) =>{
    return amount1 *2
}
console.log(doublemoney(1))
//-----------------------------------------------//
//if there is only 1 single life in bracket we can use this


const doublemoney1 = amount2 => amount2 *2
console.log(doublemoney1(1))


const doublemoney2 = amount3 => {amount3 *2} //jab {} use karenge to andar return aana chiye nhi to undefined error aayega
console.log(doublemoney2(1))


const doublemoney3 = amount4 => {
    return amount4 *2} 
console.log(doublemoney3(1))
//-----------------------------------------------//
function add(a,b){
    return a+b;
}
//----or---------------//
const add2 =(a,b) => a+b;
//-----------------------------------------------//
function say(){
    console.log("hi")
}
//---------or-----------//
const say1 =() => 'hi';//in case there is no arument

//-----------------------------------------------//
