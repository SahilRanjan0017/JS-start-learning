const mynums=[1,2,3,4,5,6,7,8,8,10]
const newnumsarray=[3,4,5,6]
mynums.forEach((val)=>{
    if(val>3){
        newnumsarray.push(val)
    }
})
// console.log(newnumsarray);

// const myarray =mynums.filter((num)=>num > 5)
// if we give scope we should have to return keyword
// const myarray =mynums.filter((num)=>{return num > 5})
// if we single ruturn we got the value which is greater than the 5 but if we use {} scope then it not show it show empty array 
// console.log(myarray);

// const newnums=[]
// mynums.forEach((nums)=>{
//     if(nums>4){
//         newnums.push(nums)
//     }
// })
// console.log(newnums);

// now from here we work on the filter property of the array 
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];
  const libraryuser = books.forEach((item)=>{
        console.log(item);
  })
//   console.log(libraryuser);



//   const libraryuser = books.filter((bookname)=>{
//     return  (bookname.genre==='History'&& bookname.publish>2000) 
//   })
//   console.log(libraryuser)

//   const userbook=books.filter((bn)=>bn.genre === 'History')
// let userwant=books.filter((value)=>{ 
//     return  value.genre==="History" && value.publish >= 1990 })
// console.log(userwant);
// so we also have to know the publish date we give previously is only 2000 thats why giving the errors
// here we got error only for the not use double inverted for string 

//   console.log(userbook);

// let userbook=books.filter((bk)=>bk.genre==='History')
// // console.log(userbook);

// userbook=books.filter((bk)=>{
//     return bk.publish>=1995 && bk.genre === "History"
// })
// console.log(userbook)