// classList use to target class 

// function fun1(){
//     let wrapper=document.querySelector('#container')
//     wrapper.classList.add('a')
//     // add to prementantly add css
// }

// function fun2(){
//     let p=document.querySelector('#container')
//     p.classList.remove('a')
//     // remove to remove
// }

// function fun3(){
//     let z=document.querySelector('#container')
//     z.classList.toggle('a')
//     // and when perform both then toggle

// }

function fun1(){
    let z=document.querySelector('body')
    let an = z.classList.toggle('b')
    console.log(an)
    // document.getElementById('h').textContent="light"
    if(an==true){
      document.querySelector('#h').textContent="light"
    }
    else{
        document.querySelector('#h').textContent="dark"
    }

}