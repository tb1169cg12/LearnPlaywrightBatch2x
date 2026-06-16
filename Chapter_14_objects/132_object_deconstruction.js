const user={
    name: "kaju",
    age:30,
    city:"delhi"
}

const{name,age}=user;
console.log(name)
console.log(age)

console.log(user)

//--------new----------
const data ={
    user : {
        name:"john",
        address:{
            city:"jy",
            state:"bahadurgarh",
            country: "japan"

        }
    }
}
console.log(data.user.address.country)