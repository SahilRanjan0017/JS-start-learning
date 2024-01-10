//es6 take arrow function and this keyword

// const user={
//     username:"Sahil",
//     price:"99",
//     Welcomemessege:function(){
//         console.log(`${this.username} Welcome to our website`);
//         console.log(this)// it work on the current values
//     }
// }
// user.Welcomemessege()
// user.username="Shivam"
// user.Welcomemessege()
// console.log(this)   // current this refer empty 

// java scipt previously work in the browser that why on that where show windows dom etc


// function chai(){
    // console.log(this.username)// give undefined
// }
// chai()
// now we saw there are so many thing in the this like gloabla and so many values 

// function with now in the arrow function 

// const chai = ()=>{
//     let username="sahil"
//     console.log(this);
// }
// arrow function also not give value direct

// chai()


//              Arrow function
// const one=()=>{}  arrow function
// const addtwo = (num1,num2)=> return num1+num2  so here you want to remove return to work ot this 
// const addtwo = (num1 , num2) => (num1+num2)  // this is direct run () it also you use this for answer

// console.log(addtwo(3,4))

const addtwo=(num1 , num2) =>({username:"sahil"})
console.log(addtwo(4,3))
// this is given the value of the username key 

// const myarray=[2,4,5,6,7]
