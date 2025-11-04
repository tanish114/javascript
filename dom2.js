//  if we want to apply single property then we can directy apply style.csspropertyname
// // document.getElementById('head').style.backgroundColor='yellow'
// or
// document.getElementById('head').style.backgroundColor='#008000'

// if we want to set multiple atttribute we can simply get it stored in varibale and aplly multiple 
// property to it
// whatever value we are passing in string is known to it as the js engine is desingned in such a way 
// that it understand what data type is writen inside of it

// let a= document.getElementById('head')
// a.style.backgroundColor='#008000'
// a.style.padding='20px'

// document.getElementById('one').style.backgroundColor='yellow'
// document.getElementById('two').style.backgroundColor='green'
// document.getElementById('three').style.backgroundColor='lightblue'

// document.getElementById('one').style.fontSize='30px'
// document.getElementById('two').style.fontSize='70px'
// document.getElementById('three').style.fontSize='100px'



// now instead of applying style one by one we can aplly directly by using "cssText"

// let b=document.getElementById('chair')
// b.style.cssText="background-color:red; color:white; padding:20px"





// if we want to create a element and then we have to insert it inside the html tag then we do this by
// following two things- 1(createlement) 2(append)  (read the example well)

// let tag=document.createElement('h1')
// tag.textContent="new js file"

// document.getElementById('parent').append(tag)

// let para=document.createElement('p')
// para.textContent="a new paragraph "
// document.getElementById('parent').append(para)


// hw
// create 10 list item from html
// all list item which is even must have bg color=green,color=white,padding=12px
