function runtest(name,status,duration){
    return `${name} : ${status} (${duration})`
}
console.log(runtest("rahul",1,1000))//unless we use console.log it wont return anything as there is return in function