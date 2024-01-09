// Date
// let myDate = new Date()
// console.log(myDate.toString());
// console.log(typeof(myDate));
//console.log(myDate.toLocalString());
// date is a object 
// let mycreateddate = new Date(2023,0,23);
// console.log(mycreateddate);
// console.log(mycreateddate.toString())
// javascript take 0 as jan in the month 

// let creatednewdate = new Date("01-12-2024")
// console.log(creatednewdate.toLocaleDateString());

// let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// 1704806800258  // this is value in the milisecond 
// console.log(creatednewdate.getTime());

// console.log(Math.floor(Date.now()))
// console.log(Date.now()/100)
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
// console.log(newDate.getDay())
// console.log(newDate.getMonth())
// console.log(newDate.getFullYear());

newDate.toLocaleString('default',{weekday:"long",})
