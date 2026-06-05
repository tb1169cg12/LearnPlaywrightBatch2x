let scores=[45,82,91,60,73]
    let grades=scores.map(s=>s>70?"pass":"fail")
console.log(grades)

//filetr-keep elements that pass a condition
let passing=scores.filter(s=>s>70);
console.log(passing);


//reduce does sum of all and return single value
let total=scores.reduce((sum,s)=>sum+s,0);
console.log(total)

let nested=[[1,2],[3,4,],[5]];
console.log(nested.flat());