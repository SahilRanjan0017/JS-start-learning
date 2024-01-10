// Objects destructuring and JSON API

const course={
    courseName:"Js in hindi"
    ,price :"999"
    ,courseInstructor:"Hitesh"

}
// console.log(course.courseInstructor);
// console.log(course["courseInstructor"])
// so here is 2 method to get name but for save time 

// destructure 

// const {courseInstructor} = course

// console.log(courseInstructor)

const {courseInstructor:sir} = course

console.log(sir)

// const navbar=({company})=>{

// }
// navbar(company = "Sahil")
// so this is use in the react 
// for the destructing the values 
