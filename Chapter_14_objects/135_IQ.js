const obj={
    a:1,
    b:2,
    c:3
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

const user ={ name: "rahul",age:39}

for (const key in user ){
    console.log(`${key} : ${user[key]}` )
}

/*Object.keys(user).forEach(key=>{
    console.log(key)
})*/