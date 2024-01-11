// console.log("Welcome to your second basic lecture")

// array 

// const myHero=["shaktiman","naagraj"]
// const myArr2= new Array(1,2,3,4)
// myarr.pop()
// const myarr=[14,22,32,4,53,63]
// const mynewnumberarray=new Array(1,2,3,4,5,5,6,7)
// mynewnumberarray.push(99,222,33,4,4)
// mynewnumberarray.pop()
// console.table(mynewnumberarray);
//  const sahilcompanyname=new Array("IT Technology, IT Project")
//  sahilcompanyname.unshift("Sahil Clothing, Sahil Stock ")
//  console.log(sahilcompanyname.includes("Sahil Clothing") ? "is" : "not")
//  console.log(sahilcompanyname);
//  console.log(sahilcompanyname.indexOf("Sahil Clothing"));
 
// const studentname=["Sahil","Megha","Shivam","Khushi"]
// console.log(myarr[1]);

// myarr.unshift(9,8)
// console.log(myarr.include(3));

// console.log(myarr.indexOf(1));

// const newArr= myarr.join()
// console.log(newArr);
// const arr1=[1,2,3]
// const arr2=[4,5,6]
// arr1=arr2.join() it give error 
// now know how join in use in various way 
// const finalarray= arr1.join("==")
// so output for join== is 1==2==3 so which symbol we want to add between them we add ny this join function
// console.log(finalarray);
// console.log(arr1);
// now understand the term slice and splice 
// const myarr=[1,3,5,7,9]
// console.log(myarr.slice(0))
// so these output is only 3 and 

// const myn1= myArr.slice(1,3)
// console.log(myn1)


        // array second

// const marvel_Hero=["thor","Ironman","Spiderman"]
// const dc_Hero=["superman","batman","flash"]
const indian=["Sahil","Shivam","Aahan","Aayansh"]
const forign=["Justin Bieber", "Eden Saren",[1,2],"charlie puth"]
// now we just used spread 
// console.log(...indian,...forign)
// so here we use spread for the all seprated array element
// so here we saw array of array treat as other array in this.
// now apply concat 
// console.log(indian.concat(forign))

// indian.push(forign)
// console.log(indian)
// so here the another array data is taken as other data value so the result in which now we have to access by the indian[4][1];
// console.log(indian[4][1])

// marvel_Hero.push(dc_Hero)

// console.log(marvel_Hero);

// console.log(marvel_Hero[3][2]);

// marvel_Hero.concat(dc_Hero)
// console.log(marvel_Hero);
// push or concat same it take it the data and then have to get data by the marvel_Hero[3][1]

//   
// here you create new array to give all value to treat as element of array
// console.log(allHero[4])
 
// const all_new_heros=[... marvel_Hero , ... dc_Hero]
// console.log(all_new_heros);
// this method known as a spred method 

// real another array 
// const anothe_array =[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const SomeBigNumberValueArray=[1,2,3,[6,7,8,3],[2,4,5]]
// console.log(SomeBigNumberValueArray.flat(Infinity))
// so here we just print the array element not to give one array 
const finalarray=SomeBigNumberValueArray.flat(Infinity)
console.log(SomeBigNumberValueArray.join(""));
console.log(finalarray);

// so this is the right which seriously make all array separated and show in the array .


// const real_another_array= anothe_array.flat(Infinity)

// console.log(real_another_array)

// console.log(Array.isArray("Sahil"))
// console.log(Array.from("Sahil")
// // )
// now uderstand the array 3 cool features which is really so cool of is from 
console.log(Array.isArray("Sahil"))     // this is use of isArray in Array 
console.log(Array.from("Sahil Singh"))  // this is create the array of sahil singh simple 
console.log(Array.of(8,3,4,5,))  // here we create the array of some element
const ar1=[1,2,3,4,5]
const ar2=[6,7,8,9,10]
const ar3=[11,22]


// let score1=100
// let score2=200
// let score3=300

// console.log(Array.of(score1,score2,score3))

// so here we saw the Array.is
//Array.from normal to create the array like "sahil" ['s','a','h','i','l']
// Array.of here score 1 score 2 score 3 combine in one array 