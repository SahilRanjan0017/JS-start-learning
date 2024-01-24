// // // singleton by constructor only by the constructor
// // //multiple instance in the literals
// // // object literals 
// // // object.create // by constructor 

// // // object are work on the key and value where key is define by you like in array you not define the key in the array 
// // // const myarr=["hi","hello"]   0 and 1 key is fix 
// // // console.log(myarr[0],myarr[1])
// // // but in object we give 0 as name or may be 0 also 
// create one symbol and add them to the object as type of symbol in that same 
const symb = Symbol("Megha")
const object={
    name:"Sahil singh",
    [symb]:"key_secured",
    mobile:"4315560",
}
// some feature of the object we discussed here 
// object.mobile="883829" // so here it easily change the value of the mobile number 
//but if i use the freeze function here the the object is freeze and the value of that is not change furture 
// Object.freeze(object)
// object.mobile="+11"// so here the date is not change due the previous freeze function 

// console.log(object.mobile)
// // const mysymbol =Symbol("mykey1")
// // console.log(typeof mysymbol)
// // const JsUser ={
// //     name:"Sahil Singh",
// //     age:23,
// //     [mysymbol] :"myke1",
// //     // mysymbl:"mykey1",              // It is work as a another string variable 
// //            // now it is work as a symbol [] we have to use square bracket to achieve them as a symbol []
// //     "nick name":"sahil",
// //     location:"bhopal"
// //     ,islogin:false,
// //     lastlogindate:["mon",'sat']
// // }
// // // console.log(JsUser.name)
// // // console.log(JsUser["name"]);
// // // console.log(JsUser["nick name"]);
// // // console.log(typeof JsUser["mysymbol"]); // it is treated as symbol here 
// // //but we dont want to get them as a string 
// // console.log(typeof JsUser[mysymbol])

// //only for symbol 

// // const mysym = Symbol("Sahil")
// // console.log(typeof mysym);

// // const juser={
// //     name:"Shivam",
// //     [mysym]:"Singh",

// // }
// // console.log(typeof juser[mysym]);

// // const sym = Symbol("foo");
// // const obj = { [sym]: "sahil"};
// // console.log(obj);
// // obj[sym]; // 1
// // obj[Object(sym)]; // still 1

// // Object.freeze(JsUser)
// // //due to this freeze now no change and not propagate new value 
// const sym=Symbol("mykey")
// const newobject ={
//     1:"dog",
//     2:"cat",
//     3:"donkey",
//     [sym]:"mykey"
// }
// console.log(newobject)

// now use the function in the object 
const Employee={
    EmpId:"1",
    EmpSalary:"150000",
    EmpName:"Sahil Singh"
}
Employee.greeting=function(){
    console.log(`Welcome ${this.EmpName} To the world of Technology Your generate id is ${this.EmpId}, and your salary is ${this.EmpSalary} Thanks`)
}
// console.log(Employee.greeting()) // so they want to console bye employee function of greeting here
// Employee.welcome=function(){
//     console.log(`Dear ${Employee.EmpName},Welcome To Our Company Google , Your Generated Id is ${this.EmpId} and your Base permonth salary is ${this.EmpSalary}`);
// }
// console.log(Employee.welcome())

const obj={
    name:"Sahil",
    work:"indepent",
    salary:"1 crore",
}
function mygreeting(){
    
}
obj.greeting = function(){
    console.log("happy journey");
}
obj.twogreeting=function(){
    console.log("This is the second journey of the object")
}
console.log(obj.greeting(),obj.twogreeting());

// obj.greeting = function(){
//     console.log("Hello User");
//     console.log(obj.name);
// }
// console.log(obj.greeting());

// obj.greetingtwo= function(){
//     console.log(`Hello user ${this.name} thanks for joinging`)
// }

// console.log(obj.greetingtwo());
// //one undefined come due to one extra undefined value 

