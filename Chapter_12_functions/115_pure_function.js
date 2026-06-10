//pure function

function calculatepassrate(pass,total){
    return ((pass/total)*100).toFixed(2);
}
 console.log(calculatepassrate(70,100))
//impure fn
 function ispasing(score){
    return score>=threshold;

 }
 let threshold=70
 console.log(ispasing(threshold))

 threshold=50
 console.log(ispasing(threshold))
