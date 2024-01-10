// Objects destructuring and JSON API

const course={
    courseName:"Js in hindi"
    ,price :"999"
    ,courseInstructor:"Hitesh"
}
// console.log(course.courseInstructor);
// console.log(course["courseInstructor"])
// so here is 2 method to get name but for save time 

const {courseInstructor} = course

console.log(courseInstructor)
