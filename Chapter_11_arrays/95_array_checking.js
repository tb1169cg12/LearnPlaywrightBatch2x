let result =Array.isArray([1,2,3]);
console.log(result);

let result1 =Array.isArray("s");
console.log(result1);

[80,90,85].every(s=>s>=70);
[80,60,90].every(s=>s>70);

[200,202,203].every(statuscode=>statuscode>200);
//some-atleast one ,ust pass

[50,70,80].some(x=>x<70);
