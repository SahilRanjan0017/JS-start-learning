// let userone={
//     name : "sahil singh",
//     upi : "user@ybl"
// }
// let usertwo = userone;
// usertwo.name="shivam ranjan"
// console.log(usertwo.name);
let hotel={
    name:"OkayaIN",
    email:"okaya@gmail",
    number:98342,
    floor:{
        ground_floor_owner:"Sandeep Nigam",
        upper_floor:{
            Manager:"sakshi mehta"
        }
    }
}
console.log(`The manger of the ground floor and the upper floor manger are ${hotel.floor.ground_floor_owner} and upper floor manger is ${hotel.floor.upper_floor.Manager}`)

// // string 
// const name="sahil"
// // const city="Bhopal"
// // let value="lakes"
// const sahil = new String ("Sahil Singh")// this is String which we add first with new to get all the function of the string in our code 
// console.log(sahil.toUpperCase());
// const student = new String("Delhi Public School")
// console.log(`${student.length}`);
// console.log(student.concat("Best School Ever"))
// console.log(`Hello my name is ${name}and happy`)

// console.log(`Hey My Name is ${name}and im from the ${city} which know as the city of ${value} and water`)

// const gamename = new String("sahil singh")


// const gamename= new String("Grand Theif Auto")
// console.log(gamename.replace("Grand","Sahil"))
// here we use , for replace the Grand by the other 

// console.log(gamename[0])
// console.log(gamename.__proto__);
// console.log(gamename.length)
// console.log(gamename.toUpperCase())
// console.log(gamename.charAt(2))

//1.> Anchor
/* <a name="sahil">sahil singh</a>
<a name="sahil singh">sahil singh</a> */
// console.log(gamename.anchor("sahil"))
// console.log(gamename.anchor("sahil singh"))

//2.> At
// console.log(gamename.charAt(1))
// output is s

// Big
// console.log(gamename.big());
//output    <big>sahil singh</big>


// Blink 
// console.log(gamename.blink(1))
// output <blink>sahil singh</blink>

//bold 
// console.log(gamename.bold(0))
//output is <b>sahil singh</b>

// charAt
// console.log(gamename.charAt(4))
// output l of sahil 

// charcodeAt
// console.log(gamename.charCodeAt(1))
// it give the ascii value of the a which is 97

// codePointAt
// console.log(gamename.codePointAt(0))
// it also give unicode value of s 115 but range of this is greater and 0XFFFF 65535

// concat
// console.log(gamename.concat("king"))
// adding the sahil singh king in original

// constructor
// console.log(gamename.constructor.length())
// pass the value to direct run .
