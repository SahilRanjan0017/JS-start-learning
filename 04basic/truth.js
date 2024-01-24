const useremail="sahil@gmail.com"
const user=[] // empty array is give true value 
if(user.length===0){
    console.log("got user email");
}
else{
    console.log("Dont have user email");
}
// truthy and falsy values 
// falsy values
// false , 0 ,-0,bigInt 0n ,"",null,undefined,Nan
//truthy values
//"0","false"," ",[],{},function(){}
// all string contain any value  it come into truthy value 

const emptyobj={

}
if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}

// logical operator 
// & and || 

// Nullish Coalescing operator 
// here we work on null and undefined 
// null safety check but value check 
// nullish operator ?? use for the error correct during server requested 

let val1;
// val1 =null??11
// val1 = 5 ?? 10
val1 = undefined??15
// console.log(val1);
// console.log(val1);

val1= null ?? 10 ?? 12
// console.log(val1);
// so the first value print


const Iceteaprice =40
Iceteaprice >=20 ? console.log("yeah we get it"):console.log("sorry we dont get the icetea")





