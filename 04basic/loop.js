// // // // for
// // // for (let index = 0; index <5; index++) {
// // //     const element =index
// // //     console.log(element);
    
// //  // }

// // //  for(let i=0;i<5;i++){
// // //     for(let j=0;j<5;j++){
// // //         console.log(`outer loop value :${j} and inner loop ${i}`);
// // //     }
// // //  }

// // let array=["flash","batman","superman"]
// // for(let i=0;i<array.length;i++){
// //     let element = array[i]
// //     console.log(element);}
// // // 

// // break and continue
// for(let i=1;i<=20;i++){
//     if(i==5){
//         console.log("five is detected successfully");
//         break; // break is use now all other values are not printed 
//         continue; // one time maaf kaar do and if we give 5 so it will is delted the value of 5 there
//     }
//     console.log(`The value of i is ${i}`);

// }

// star pattern 
// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//   for (let j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

// let nn=5
// let str="";
// for(let i=1;i<nn;i++){
//     for(let j=1;j<i;j++){
//         str=str+"*";
//     }
//     str+="\n"
// }
// console.log(str);

let n=5
let str=""
for(let i=0;i<n;i++){
    for(let j=0;j<n;j++){
        str+="*"
    }
    str+="\n"
}
console.log(str);