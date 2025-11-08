// so it is use to save some data in browser 
// it can use to store small data upto 7mb
// data is stored in key value form 
// its type is string
// by default data in local host gets save and gets deleted only when we delete by own
// it has four main function

// 1- setItem()-save data in browser
// 2- getItem()-acess data from localstorage
// 3-removeItem()- remove at a time one element can be delete
// 4- clear()-will clear everthing permanently

// localStorage.setItem("username","tanish")
// localStorage.setItem("userage",90)
// localStorage.setItem("fees",90000)
// localStorage.setItem("city","bhopal")
// localStorage.setItem("course","web dev")

// let a=localStorage.getItem("userage")
// document.write(a)

// localStorage.removeItem("username")

// localStorage.clear()


// whenever we set object directlt it does not display as the value gets stroed in form of object and to 
// convert it into string we use JSON.stringify
let person={
    name:"raj",age:29,city:"bhopal"
}
localStorage.setItem("userdata",JSON.stringify(person))

let p= localStorage.getItem("userdata")
console.log(p);

// JSON.parse convert into object
let vl=JSON.parse(localStorage.getItem("userdata"))
console.log(vl.name);
