let status=["pass","fail","skip"]
console.log(status[0])
console.log(status[1])
console.log(status[2])
console.log(status.at(-1))
console.log(status.at(-2))
console.log(status.at(-3))
console.log(status.at(-4))
status[1]="blocked";
console.log(status[1])