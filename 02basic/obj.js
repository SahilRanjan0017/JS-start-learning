// this is the second of the object 
// const tinderuser = new Object() // this is singleton object
// it give simple as a empty object
let tinderuserr={}
tinderuserr.name="Aayansh"
tinderuserr.id="233234"
tinderuserr.issslogingpreviously=false
// console.log(tinderuserr);

const tinderuser={}
tinderuser.id="1233"
tinderuser.name="Aahan"
tinderuser.islogin=false

// console.log(tinderuser);

// for regular user
// const regularUser={
//     email:"Sahil@gmail.com",
//     fullname:{
//         userFullName:{
//             firstname:"Sahil",
//             lastname:"Singh"
//         }
//     }
// }
// nested object 
        const hotel={
            hotelname:"Mouryalok",
            groundsection:{
                groudmanger:"rishikesh mahto",
                leftcorner:{
                    partytype:"modern family"
                    ,rightdj:{
                        djoperator:"sashi mahajan"
                    }
                }
            },
            floorsection:{
                floormanger:"ravishankar prasad"
            },
            middlehotelsection:{
                currentownername:"Sahil Ranjan"
            }
        }
    // console.log(hotel.groundsection.leftcorner.rightdj.djoperator)
        // console.log(hotel.groundsection.groudmanger)
// So here we are also nested so many of the object in one of the object 

// console.log(regularUser.fullname?.userFullName.firstname);
// console.log(regularUser[fullname[userFullName[firstname]]]);
// so here we saw that they say full name not defined but it is defined so . opertor is use most of time to use object to object nested.
// so here we saw that are work on the full nesting and we can easily nested them in object to object to object and at last get value by . opertator simple.

// object merge and combine 
        // here we are combining and the marging of the object in the one 
        const object1={
            "1":"999",
            "2":"1999"
        }
        const object2={
            "3":"2999",
            "4":"3999"
        }
        // so Object.assign is the function in which we assign their values 
        // const finaialarray=object.assign({},object1,object2)
        // we also use the spread here to the make direct all seprated in one 
        // const finaialarray=object.assign({},object1,object2)
        // const finalspreadarray = {...object1,...object2}
        // const finaialarray=object.assign({},object1,object2)
        // and if we change the positon also the finalarrayis changning the object1 Reference so problems occurs 


        // if the line no 66 run first the object 1 and object assign my object and it give the error on the line 68 

        // console.log(finalspreadarray);
        // console.log(...object1,...object2);
        // console.log(finaialarray)
        

// const obj1={
//     1:"a",
//     2:"b",
// }
// const obj2={
//     3:"a",
//     4:"b",
// }
// const returntarget=Object.assign({},obj1,obj2);
// target and and object 

// const obj3 =Object.assign(obj1,obj2);
// console.log(obj3);
// so we use assign which is the use by the Object.assign fucntion we also use some time {} before combine to get assure result from them .
// const object3=Object.assign({},obj1,obj2);
// console.log(object3)
// const object = {obj1,obj2}
// // this is same make obj2 data other 

// console.log(object);

// const objectfinal={...obj1,...obj2};
// spread which is use 90 percent of the time 
// console.log(objectfinal)
// now when data base value come so all come in the array 

// as similar as other we can nested all object in the one array 

const userdatavalue=[
    {
        id:1,
        email:"h@gmail.com",
    },
    {
        id:2,
        email:"s@gmail.com",
    },
    {
        id:3,
        email:"l@gmail.com",
    },
]
userdatavalue[1].email
// so we use it by the object of the array 
// console.log(Object.keys(tinderuser))
//[ 'id', 'name', 'islogin' ]
// it give the result as the all key of the selected object
// so here we saw the object key.which object we pass value in the array so it is so important all work in data bases 
// we also find values from them 
// console.log(Object.values(tinderuser));
// it give the value of the object we write in the value 
// [ '1233', 'Aahan', false ]

// we have also some other function for entries like function 


// console.log(Object.entries(tinderuser));
// so it give the value in array nested
// [ [ 'id', '1233' ], [ 'name', 'Aahan' ], [ 'islogin', false ] ]

//some time some value not exist so we can do it manual or use property

// console.log(tinderuser.hasownproperty('islogged'))
 // so why this we know is their is key which we want availabe or not 

