// let a=10
// const b=20
// var c=30
// {} curly brases known as a object with function and if/else scope area 
var a=300
// now why the c =300 not give to the last 
const age=3
if(age>2){
    var a=22;
    console.log(a);
}   // so as a output is 22 we have problem with the global and local scope that's the problem 
console.log(a);

// if(true){
//     let a=10
//     const b=20
//     // console.log(a);
//     c=30   /// var or without any varible give problem 
//     // this is called block scope 
// }
// // outside the block known as global scope 

// // console.log(a)
// // console.log(b)
// // console.log(a)
// // so that is problem c is get value out of scope 

// // for(let i=0;i<5;i++){
// //     console.log(i);
// // }

// // operating system scope 