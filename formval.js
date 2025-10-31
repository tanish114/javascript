// ?.focus is used to add focus to a particular field. it is a function
// form validation are use to generate error
// isNuN is a function whhich state that is not a number
// .includes is function which gives always boolean output accept only one argument
// to use multiple argument we use .match 
// .match have special syntax-- .match(/[all the things you want it to include]/)
// we mostly work with not(!) as will have to  work with error 
// we study form validation to generate  error 




function validate(){
    let name=document.querySelector('#name').value
    let age=document.querySelector('#age').value
    let city=document.querySelector('#city').value
    let salary=document.querySelector('#salary').value
    let sub=document.querySelector('#sub').value
    let contact=document.querySelector('#contact').value
    let email=document.querySelector('#email').value
    let pass=document.querySelector('#pass').value
    let cpass=document.querySelector('#cpass').value



if(name=="") {
    document.querySelector('#error').innerHTML="please fill the detail"
    document.querySelector('#name').focus()
    return false
}
else if(city=="") {
    alert("fill your city")
    document.querySelector('#city').focus()
    return false
}

// else if(age=="") {
//     alert("fill your age")
//     document.querySelector('#age').focus()
//     return false
// }

// else if(isNaN(age)) {
//     alert("fill your age in numbers")
//     document.querySelector('#age').focus()
//     return false
// }
else if(age=="") {
 document.querySelector('#age').focus()
 alert("fill your age")
    return false
 }
 else if(age.length >3 ) {
     alert("fill your age")
 document.querySelector('#age').focus()

    return false
 }




else if(isNaN(salary)) {
    alert("fill your salary inn numbers")
    document.querySelector('#salary').focus()
    return false
}

else if(sub=="") {
    alert("fill your sub")
    document.querySelector('#sub').focus()
    return false
}

 else if(contact==""){
    alert("enter contact number")
    document.querySelector('#contact').focus()
    return false
 }
 else if(contact.length <10 || contact.length>10){
    alert("enter 10 digit number")
    document.querySelector('#contact').focus()
    return false
 }

else if(email==""){
    alert("enter your email")
    document.querySelector('#email').focus()
    return false
 }

 else if(! (email.includes('@gmail.com'))){
    alert("write in correct format")
    document.querySelector('#email').focus()
    return false
 }

 else if(pass==""){
    alert("enter your password")
    document.querySelector('#pass').focus()
    return false
 }

 else if(!(pass.match(/[~!#$@%^&*()]/))){
    alert("pleaase enter seccial character")
    document.querySelector('#pass').focus()
    return false
 }

  else if(cpass==""){
    alert("enter your password")
    document.querySelector('#cpass').focus()
    return false
 }

 else if (!(cpass==pass)){
    alert("password does not match")
    document.querySelector('#cpass').focus()
    return false
 }

}



// hw the digit of age should not be greater than 3
// contact should have 10 digit nor less nor more



// length of password dhould not be less than 8 and greater than 15 
// and password must contain first letter as capital