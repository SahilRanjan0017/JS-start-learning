// forin loop
// const coding = ["js","ruby","java"]

// coding.forEach(function (item){console.log(item);} )
// for each 
// const number=[1,2,3,4,5,6]

// number.forEach(function(val){
//     console.log(val);
// })
// // here the function are without name 

// const hero=["Sahil","Shivam","Shashi"]
// hero.forEach((item)=>{
//     console.log(item)
// })
// here the arrow function use to get value

// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)
// this is by the array function 

// coding.forEach((item,index,arr)=>{
//     console.log(item
//         ,index,arr);

// })
// so we see here are we get so many item,index,arr

const mycoding=[{
    languageName:"javascript",
    languageFileName:".js",
},{
    languageName:"java",
    languageFileName:".java",
},{
    languageName:"python",
    languageFileName:".py",
}
]
// here we see all data are come in the array form 
// now simple use for each loops to find out all the value which we want to see 

// mycoding.forEach((item)=>{
//     console.log(item.languageFileName,item.languageName);
// })
// want to extract the data direct throw out the function 

// function Sahil(item){
//     console.log(item.languageFileName,item.languageName);
// }
// mycoding.forEach(Sahil)

function shivam(val){
    console.log(val.languageFileName);
}
mycoding.forEach(shivam)