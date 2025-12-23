// built-in data type 
// number , string , boolean , void , undefined , null 

let  userId : number;

let userName : string ;

let isActivated : boolean;
userId = 101;
userName = "sajib Hossen";
isActivated = true

console.log("userId :", userId ,)
// void  : kono function keso retuen ne korley tar data type void ar keso return korley tar data type return valo oni jay hoybea 
function addNumber ( num1:number , num2:number) : void{
    console.log(num1 +num2)
}
addNumber(20,30)

function add ( num1:number , num2:number) : string{
    console.log(num1 +num2)
    return "hey i am "
}
add(20,30)