let scores=[
[85,90,78],
[60,45,70],
[95,88,92]

];

let rowSums = scores.map(row=> row.reduce((a,b)=>a+b,0))
//map() tab use hota hai jab tumhe array ke har ek element 
// par koi operation chalana ho aur badle mein ek naya array chahiye ho.
console.log(rowSums)


//--------------all types of operations-----
// .map() — (Sabko Badlo / Transform Karo)
let testScores = [253, 175, 275, 90, 120];
let sumScore = testScores.map(Score=>Score+10)
console.log(sumScore)
//.filter() — (Chhanni Lagao / Baant Do)
let newscore=[1,2,3,4,5];
let greatscore=newscore.filter(x=>x>3)
console.log(greatscore)
//.find() — (Kisi Ek Ko Dhoondo)
let points=[11,2,3,4,55,6]
let pips=points.find(max=>max>50)
console.log(pips)
//.reduce() — (Sabko Mila Kar Ek Kar Do)
let apples=[1,2,5,8,3,54,234]
let totalapples=apples.reduce((a,b)=> a+b,0)
console.log(totalapples)
//.forEach() — (Sirf Loop Chalao)
let testScorez=[1,2,3,4,5,6]
testScorez.forEach(scor => {
    console.log("Test Score is: " + scor);
});


//--------real use case------
let suitResult = [
    ["ogin-passs","register-pass","logout-pass"],
    ["search-pass","filter-fail","sort-pass"],
    ["checkout-fail","payment-fail",]
]
for (let i=0;i<suitResult.length;i++){
    for (let j=0;j<suitResult[i].lenght;j++){
        if(suitResult[i][j].includes("fail")){
            console.log(suitResult[i][j]);
        }
    }
}