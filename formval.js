// ?.focus is used to add focus to a particular field 
// form validation are use to generate error
// isNuN is a function whhich state that is not a number



function validate(){
    let name=document.querySelector('#name').value
    let age=document.querySelector('#age').value
    let city=document.querySelector('#city').value
    let salary=document.querySelector('#salary').value
    let sub=document.querySelector('#sub').value

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



}



// hw the digit of age should not be greater than 3
// contact should have 10 digit nor less nor more