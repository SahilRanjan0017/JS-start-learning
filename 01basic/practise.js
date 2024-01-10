// // Now the all practise of the previsous date and first class 
// console.log("Sahil Singh Welcome back to journey of my success");
// // other way to write this same are :
// console.table(["sahil", "singh"])
// // variable 
// // there are 3 type but we work with only of the 2 in the variable making in the javascript 
// let AccountHolderName="Sahil Singh"
// let AccountId=1223
// const AccountNumeber ="983983"
// AccountHolderCity="Bhopal"
// let ChildrenCount = 3
// console.log(`The id of the ${AccountHolderName} is :- ${AccountId} They are from ${AccountHolderCity} there Account Number is :"${AccountNumeber}" and in their home their are ${ChildrenCount} Children .`)

// // const value never change and let value is change 
// let box=33;
// const box2=44;
// // now change the value of box from 33 to 55;
// box = 55  // it is change successfully 
// // now change the value of box2 from 44 to any value 
// // box2=44   // it not change the value of box2.
// console.log(box , box2);
// // there are 2 type of data type 
// // primitive are 7 types in the javascript
// // 1 Int
// // 2 Bigint 
// // 3 undefined
// // 4 null
// // 5 String 
// // 6 boolean 
// // 7 Symbol 

// // in java script not want to specifie the data or literal are which types 
// let a=null
// let interrger=Number(a);
// console.log(interrger)

// let score = ""      // it give false other why all true
// let num = Boolean(score)
// console.log(num);

// console.log(+true);     // 1
// // console.log(true+);  give error
// // console.log(+"");           give 0 for this null value 
// // console.log(""+)        // give error

// let x=5  but if we write const x it is not changed values
// const y=++x
// because here the x where the reference of memeroy 
// is get ++ for the x and now it preincrement by 1 
// so the answer is 6
// console.log(x);

// let i=9;
// const u=i++;
// console.log(u);

// compare the number 
// console.log(4===4) // it is use to check direct is euqal or not to the string to sstring or num to num type

// const heros=["sahil","shivam","monu","sonu"]
// console.log(heros[2]);

// let myobj = {
//     name :"sahil",
//     age :23,
// }
// Object2=myobj
// console.log(myobj.name);
// function treat as a variable 

let sahil = function(age){
    console.log(age);
    console.log("sahil singh");
}
console.log(sahil(3))
// so we work as the give value of age in the function and at the output as we use variable name to call them .s


    // $ String Fuction 
// const gamename="Grand Thief Auto"
// console.log(gamename.anchor());
// //<a name="undefined">Grand Thief Auto</a>

// console.log(gamename.charAt(0));
        // charAt(0)='G';

// console.log(gamename.big());
// <big>Grand Thief Auto</big>

// console.log(gamename.bold())
// <b>Grand Thief Auto</b>

// console.log(gamename.charAt(0))
//         similar to the at fuction of string javascript

// console.log(gamename.charCodeAt(0))
//     // 71 of it give the g value to ascii and 0 to 65535  'A' start with 65  'G' 71

// console.log(gamename.codePointAt(0))
// it give similar value to charCodeAt() but it go to the 
// last value greater to the 0xFFFF(65535);

// console.log(gamename.concat(" Sahil" ))
// // Grand Thief Auto Sahil

// console.log(gamename.constructor(gamename))
// call the constructor the get their value

// console.log(gamename.endsWith('o'))
// true 

// console.log(gamename.fixed())
// <tt>Grand Thief Auto</tt>

// console.log(gamename.fontcolor("red"))
// <font color="red">Grand Thief Auto</font>

// console.log(gamename.fontsize("3"))
// <font size="3">Grand Thief Auto</font>

// let word ="auto"
// console.log(`${word ? "is" : "not"}`)

// console.log(gamename.indexOf("d"))

// console.log(gamename.italics(gamename))
// <i>Grand Thief Auto</i>

// let gamename = "grand theif auto singh"
// console.log(gamename.lastIndexOf('auto'))
// let a="sahil Singh " 
// let b="sahil singh "
// console.log(a.localeCompare(b))
// // give true so answer is became 1

// let matchscore=423;
// let reg = 3
// console.log(matchscore.match(reg))
const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const regexp = /[D-E]/gi;  // show we have to write /[] /gi and where to where you just want to get in the string 
// const matches = str.match(regexp);
// console.log(matches);

// const strr="The quick brown fox jumps over the lazy dog"

// const word = strr.split(' ');
// console.log(word[1]);

// so we get value by word[0] the 
// word[1]= quick
// let sample1='sat Saturday night dj plan'
// console.log(sample1.startsWith('sat'));

// console.log(sample1.startsWith('plan',4))
// const str1 = 'Saturday night plans';

// console.log(str1.startsWith('Sat'));
// // Expected output: true

// console.log(str1.startsWith('night', 1));
// // Expected output: false





