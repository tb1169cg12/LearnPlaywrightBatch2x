const user =
{
firstName : "pramod",
lastname : "dutta",
get fullName(){
    return this.firstName+ this.lastname
},
set fullName(value){
    [this.firstName, this.lastname]= value.split(" ")
}
}
console.log(user.fullName);
user.fullName="amit sharma"
console.log(user.fullName);
//new------