const user ={
    name: "john",
    age : 30,
    email : "johm@gmail.com"
};
console.log(user)
console.log(user.name)
console.log(user["age"])
//we can add data dynamicaly
const key ="age"
console.log(user[key])

user.city ="bahadurgarh"
user.age=33
console.log(user)


let obj={ name: "raj"}
console.log(Object.getOwnPropertyDescriptor(obj,"name"))