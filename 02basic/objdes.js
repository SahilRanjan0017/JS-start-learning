// Objects destructuring and JSON API
// here we learn aboout the destructuring concept of the javascipt 

// const valuee={
//     indiarupes:79,
//     forigncurrency:929
// }
// console.log(valuee.indiarupes);
// if we want to access the same data many time then the problem occurs in the code 
// so here we use short destructre 
// const {indiarupes : rs} = valuee;
// console.log(rs);



// const course={
//     courseName:"Js in hindi"
//     ,price :"999"
//     ,courseInstructor:"Hitesh"

// }
// console.log(course.courseInstructor);
// console.log(course["courseInstructor"])
// so here is 2 method to get name but for save time 

// destructure 

// const {courseInstructor} = course

// console.log(courseInstructor)

// const {courseInstructor:sir} = course

// console.log(sir)

// const navbar=({company})=>{

// }
// navbar(company = "Sahil")
// so this is use in the react 
// for the destructing the values 

// some destructing 
const obj={
    name:"sandeep",
    lover:"shetal",
    age:22,
    lovemarriage_possibility : true
}
// we simply destructure the lovemarrage_possibility
const { lovemarriage_possibility : lovechance} = obj;
// now there new name is lovechance 
// console.log(lovechance)
//but after destructing we can not use previous varibale name 
// console.log(lovemarriage_possibility) // so it is change the reference and name also destructer
// ReferenceError: lovemarriage_possibility is not defined
