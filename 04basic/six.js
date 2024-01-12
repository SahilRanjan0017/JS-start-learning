
// const mynumber=[1,2,3,4,5,6,7,8,9,10]
// mynumber.forEach((item,value)=>{
//     console.log(`item ${item},the value ${value}`);
// })

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

console.log(pricetopay);