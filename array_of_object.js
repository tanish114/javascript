// // array of object is use to store multiple data of different person
// // key must always be same
// map is a high order function,will pass callback function and acess element of array
// it will return new array 

// map function syntax
// let ar=[{},{},{}]
// ar.map(()=>{
// return 
// 
// })
// map function don't give output it will only give boolean value
// to get the value we will use filter function
// filter use to filter out data on any condition

let student=[
    {
        name:"tanish",
        age:22,
        city:"bhopal",
    },

    {
        name:"ram",
        age:22,
        city:"indore",
    },
    {
        name:"raghav",
        age:23,
        city:"jabalpur",
    },

    {
        name:"riya",
        age:21,
        city:"satna"
    },

    {
        name:"shyam",
        age:22,
        city:"maihar",
    }

]

// console.log(student);
// let res= student.map((e)=>{
//     return e.age>=21
// })
// console.log(res);

// let res= student.map((e)=>{
//     return e.age+" "+e.name
// })
// console.log(res);

// let res=student.filter((i)=>{
//     return i.age>=22
// })
// console.log(res);

// destructuring-works on both array 

// let[name,city,country,state]=["tanish","bhopal","india","mp"]
// // console.log(name);
// console.log(state);
// destructuring-works on both array and object
let{name,age}={
    name:"tv",
    age:15
}
console.log(name);



// spread operator denoted by three dot ...
// spread operator merage two array
// works on both aray and object
let ar1=[1,2,3]
let ar2=[4,5,6,...ar1]
console.log(ar2);

