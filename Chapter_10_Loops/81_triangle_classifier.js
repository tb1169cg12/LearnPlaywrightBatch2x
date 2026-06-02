let side_1=1;
let side_2=2;
let side_3=3;
if((side_1===side_2)&&(side_2===side_3)&&(side_3===side_1))
    {
    console.log("triange is equilaterral")
}
else if(
    (side_1===side_2)&&(side_2!==side_3)&&(side_3!==side_1)||
    (side_1===side_3)&&(side_2!==side_3)&&(side_2!==side_1)||
    (side_2===side_3)&&(side_1!==side_3)&&(side_1!==side_2)
)
    {
    console.log("triange is isoceless")
}
else if((side_1!==side_2)&&(side_2!==side_3)&&(side_3!==side_1))
    {
    console.log("scalen triangle")
}