// setIntervel()-type of high order funtion 
// it takes two parameter 1.function 2.timer

// setInterval(()=>{document.write("hii....")},3000)

let a=0
let h1=document.querySelector('#count')
let st
function fun1(){
    st=setInterval(()=>{
    h1.innerHTML= ++a
    },1000)
}

function stop(){
    clearInterval(st)
}

function reset(){
    a=0
    h1.innerHTML=a
    clearInterval(st)
}