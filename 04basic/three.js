// // array specific loop
// // for of 
// // ["","",""]
// // [{},{},{}]
// const arr=[1,2,3,4,5]
// for (const i of arr) {
//     // console.log(i);
// }
// // so here we work on the loop of array and i is iterator 
// const obj={
//     number:"999"
//     ,name:"sahil"
// }
// // these are the example of the forof loops
// for (const i of obj.number) {
//     // console.log(i);
// }
// const greetings="hello world!"
// for(const greeat of greetings){
//     // console.log(greeat);
// }
// // Maps 
// const map = new Map()       // Map object 
// map.set('In',"India")
// map.set('Usa',"United state of America")
// map.set('Fr',"France")
// // map is in the unique value 
// // console.log(map);

// // for (const key of map) {
// //     console.log(key);
// // }
// // so if you give key get all value of the map 
// for (const [key,value] of map) {
//     // console.log(key,'==', value);
// }

// const mapvalue = new Map()

// mapvalue.set('1',"America")
// mapvalue.set('2',"India")
// mapvalue.set('3',"Newyork")
// mapvalue.set('4',"unitedkingdom")
// console.log(mapvalue);

// // using forof loops for that 
// for (const [key,value] of mapvalue) {
//     console.log(`The value of the ${key} ={${value}}`);
// }

const myobject={
    'game1':'NFS',
    'game2':'spiderman'
}
for(const key of myobject.game1){
    console.log(key);
}