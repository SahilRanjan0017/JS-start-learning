
// const mynumber=[1,2,3,4,5,6,7,8,9,10]
// mynumber.forEach((item,value)=>{
//     console.log(`item ${item},the value ${value}`);
// })
// const numberofarray=[11,22,33,44,55,66,77,88,99]
// numberofarray.forEach((item,value)=>{
//     console.log(`item ${item} and the value ${value}`)
// })

// const nmapvalue = numberofarray.map((item)=>item +10)
// console.log(nmapvalue)
//     // call back story function ()=>{}
//     // always return when scope have to open 


// const newnums =mynumber.map((num)=> num+10)

// // console.log(newnums);
// filter filter out but in the map we have to write all the condition to achieve that 

// chaining in this method we chainig so many .fuction in one function 
// const newnums= mynumber
// .map((num)=> num*10)
// .map((num)=>num+1)
// .filter((num)=>num>=50)
// console.log(newnums)

// accumulator and the currentvalue
//accumulator starting intial value get that first time value 
// currentvalue get from the array 
// accumulator ask first time for value then after the current value it take the value in the accumulator 

// const mynumber=[51,21,13]

// const mytotal=mynumber.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval${currval}`)
//     return acc+currval
// },3) // here we pass the iniital valuefor the accumalator 
// acc:3 and currval51
// acc:54 and currval21
// acc:75 and currval13
// console.log(mytotal);


// const mynum=[1,2,3]
// const mytotal=mynum.reduce((acc,curr)=>acc+curr,0)
// console.log(mytotal);
const numsger =[2,5,6,7]
const mytotalvalue = numsger.reduce((accu,curval)=>accu+curval,3)

console.log
// shopping cart 
const shoppingcart=[
    {
        itemname:"Js Course",
        price:2999,
    },
    {
        itemname:"Mobile Dev Course",
        price:4999,
    },
    {
        itemname:"Data Structure Course",
        price:1999,
    },
]
const pricetopay =shoppingcart.reduce((acc,item)=> acc+item.price,0)
console.log(pricetopay)

// console.log(pricetopay);