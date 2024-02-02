// "use strict"; // treat all js code as newer version 
// // we just use "use strict " for the run all code as newer version 
// // alert is not working in the direct javascript it is working in the browser only.
// // alert("sahil singh") // we are using nodejs , not browser
// // let state is only the variable which we make here number is the data type which value is going to last 2ka power 53 approx.  bigint is the second use for extra big number and that use like let var=22222n n in last for bigint , now string type only write between double inverted comma ,boolean here work with true false also 0 and 1 ,null is type of object during call 
// // console.log(typeof null)
// // symbol is work as like const mysym=Symbol("124") it is the unique char identity
// // let state;
// //number => 2 to power 53;
// // bigint
// // string
// // boolean => true/false
// //null -> console.log(typeofnull) give result object
// // undefined => console.log(typeof undefined) give undefined

// // symbol

// // object;
// // object , Array are not primite type they are non primitive type 

// // let construct one object here

// // const Student={
// //         StudentName:"Sahil Singh",
// //         StudentRollNo:1,
// //         StudentAddress:"Kankarbagh Patna"
// // }
// // // now time for the array 
const Arr=[
    {
        StudentName:"Sahil Singh",
        StudentRollNo:1,
        StudentAddress:"Kankarbagh Patna"
}]
// // we also pass the object direct in the array 
 const final = Arr.filter((index)=>index.StudentAddress)
 console.log(final);
 const doublefinal=Arr.reduce((index)=>index.StudentAddress!="")
 console.log(doublefinal);

// // console.log(typeof null);
// // give object as output

// // symbol


// // console.log("hitesh")

// console.log("Sahil Singh is now on the way of the Software Developer Life Style")
// console.log(`So We all know what is the key value of the unique key five = ${5}`)