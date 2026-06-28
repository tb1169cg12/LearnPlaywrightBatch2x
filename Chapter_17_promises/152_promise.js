let order = new Promise(function(resolve,reject){
    let foodready= true;
    if (foodready){
        resolve("piza is delivered food ready")
    }else {
        reject("pija not ready")
    }
})
console.log(order)
order.then