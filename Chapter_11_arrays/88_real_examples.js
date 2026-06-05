let browsers=["chrome","firefox","edge","safari","opera"];
console.log(browsers.length);
console.log(browsers);

//if we want to remove last element opera we will use pop
browsers.pop();
console.log(browsers)

// if we want to remove 1st element we use shift
// below program we used to check what we removed
let removed = browsers.shift();
console.log(browsers);
console.log(removed)

for (let i=0;i<browsers.length;i++){
    console.log(browsers[i]);
    if(browsers[i]==="safari"){
        console.log("safari has to be removed")
    }

}