// // call by value and the call by reference 
// // primitive data type 7 types
// 1.> string 
// 2.> Number
// 3.> Boolean
// 4.> null
// 5.> undefined
// 6.> Symbol use to unique CompositionEvent;
// 7.> bigint all value cover in int but some very big come in this 

// const score = 100; we never define them to this is number string etc 
// const scorevalue = 100.3 decimal number all come in the number 
// const outsidetemp=null;
// let userEmail;      this value is know as undefined;

// symbol
// const id= Symbol('123')
// const anotherid=Symbol('123')

// console.log(id===anotherid);

// const bigNUmber=4444444444444222222222222n;
// console.log(bigNUmber);



// Reference type data data 
// it is also know as the non primitive 
// array 
// object 

const heros=["sahil","aayansh","aahan"];
let myId= {
    name: "sahil",
    age:22,
}
const superhero=["Sahil is always the hero","Shivam is my brother "]
// this is the array 
// and the object is 
// const mysb=Symbol(12)
// let myphone={
//     id:"233"
//     [mysb]="333"
// }
// console.log(myphone)

const myfunction = function(){
//    console.log( heros.name="sahil singh")
}
// console.log(myfunction());

const sum = function(val1,val2){
    return val1+val2
}
// console.log(sum(2,3))

const summ= function(item1,item2){
    return item1+item2;
}
console.log(summ(4,67))