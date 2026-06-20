//single dimension array
let a = [1, 2, 3];
console.log(a)

let grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
            ]

//[i,j]=i is row j is column
//index of 5 is 1,2,

for (let i=0;i<3;i++){
    for (let j=0;j<3;j++){
        console.log(grid[i][j])  //grid came from above grid which we made
        
    }
    console.log(" ")
}