let test_matrix=[
    ["login","pass",200],
    ["checkout","fail",404],
    ["search","pass",180]
];
for (let i =0;i<test_matrix.length;i++){
    for (let j =0;j<test_matrix[i].length;j++){
        console.log(test_matrix[i][j])
       /* if (test_matrix[i][j]==="login"){
            console.log("pass")
        }else{console.log("fail")}*/
    }
    console.log(" ")
}

//another way to write
for(let row of test_matrix){// 1. Ek-ek karke poori row uthao
    for (let cell of row){   // 2. Us row ke andar se ek-ek cell uthao
        process.stdout.write(cell+" ")// 3. Ek hi line mein space ke sath print karo
    
    }
    console.log()   // 4. Row khatam hote hi line change karo
}
console.log("--------")
//another way to write
test_matrix.forEach(row=>{
    row.forEach(
        cell=>process.stdout.write(cell+ " ")
    );
    console.log();
})