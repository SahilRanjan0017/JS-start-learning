// function saymyname(){
//     console.log("H")
//     console.log("A")
//     console.log("H")
//     console.log("A")
//     console.log("H")
//     console.log("A")
// }

// saymyname()

// // function addtwonumber(number1,number2){
// //    num2= number1+number2
// //    console.log(num2);
// // }
// // // const result=addtwonumber(33,22)
// // addtwonumber(4,5)
// // console.log(result)
// // so it return as undefined becuase as void in cpp we just print not return here .

// // function sum(num1 , num2){
// //     // let result=num1+num2
// //     // console.log("Sahil")    // after result console is not working
// //     // return result

// //     return num1+num2;

// // }
// // similar as cpp we return the value and fetch the value by new variable store them to print 
// // let result=sum(3,4)
// //     console.log(result);

function loginmessage(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username} Just logged in`
}

// const nameofuser= loginmessage("sahil")
// console.log(nameofuser);
console.log(loginmessage())