// form handling in js use to work with form
// in this we will use onsubmit in html page to work when only form gets submit 
// in html we will target input not label so as all the value gona be inside of input so 
// will give id to input
// .value will target the value inside of box and before .value only box will get target
// and without parseint we know js by default will return in string
// return false will make the browser know that its not getting executed properly and stop reloading
// wherever in html will decalre our function as returnn so the html also knows that it have to stop 
// reloading

// function fun(){
// let num1=parseInt(document.querySelector('#num1').value)
// let num2=parseInt(document.querySelector('#num2').value)

// alert(num1+num2)

// }

// function fun(){
//      let num1=parseInt(document.querySelector('#num1').value)
//  let num2=parseInt(document.querySelector('#num2').value)

//  document.querySelector('#result').innerHTML=num1+num2

//  return false

// }

// wap to take 5 input value from user and print below the form

// function fun(){
//     let a=(document.querySelector('#l1').value)
//     let b=(document.querySelector('#l2').value)
//     let c=(document.querySelector('#l3').value)
//     let d=(document.querySelector('#l4').value)
//     let e=(document.querySelector('#l5').value)

//     document.querySelector('#result1').innerHTML=a
//     document.querySelector('#result2').innerHTML=b
//     document.querySelector('#result3').innerHTML=c
//     document.querySelector('#result4').innerHTML=d
//     document.querySelector('#result5').innerHTML=e

//     return false
// }

document.querySelector('#a').value