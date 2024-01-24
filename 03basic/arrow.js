//es6 take arrow function and this keyword

// const Jsuser={
//     username:"Hacker"
//     , ping : 93
    
//     ,welcomemessage:function(){  // here welcomemessege is key and function is the value of that key 
//         console.log("Welcome the juser we are really happy to see you again ")
//         ,console.log(this.username)
//     }
// }
// console.log(Jsuser.welcomemessage());

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

const chaileela=()=>{
    fullName="Sahil singh",
    console.log(this)
}

// const sum=function(){
//     valueofa="11",
//     valueofb="22",
//     valueofc="33"
// }
// so in the function we assign all the value but in object we use scope operator :
// const myobject={
//     myuserworking:"sahil singh",
//     yourdailygoalhour:8,
// }


// assiging in the value of the object 

// arrow function also not give value direct

// chai()


//              Arrow function
// const sum=(val1,val2)=> val1+val2
// console.log(sum(4,5))

// const digitalreversesum=(number) => number %10
// console.log(digitalreversesum(545))

let sum=0
let rem=0
const reversenumber=(number)=>{
    while(number<0){     
    rem=number%10,
         sum=number*10+rem,
         number=number/10
        }
        return sum  
}
const ans=reversenumber(343)
console.log(ans)

// const one=()=>{}  arrow function
// const addtwo = (num1,num2)=> return num1+num2  so here you want to remove return to work ot this 
// const addtwo = (num1 , num2) => (num1+num2)  // this is direct run () it also you use this for answer

// console.log(addtwo(3,4))

// const addtwo=(num1 , num2) =>({username:"sahil"})
// console.log(addtwo(4,3))
// this is given the value of the username key 

// const myarray=[2,4,5,6,7]
