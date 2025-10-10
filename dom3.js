// we can chnage image set in html by targeting src in js

// document.getElementById('image').src="image2.avif"



// events are called actions which are performed by user on our webpage
// mouse event
// onclick works when click ( click left click only)

// ondblclick works when double click(click double left click only)

// oncontextmenu works when single right click

// onmouseenter works when mouse is brought in it and will keep on working even when mouse is removed from it

// onmouseleave works when mouse is leave

// function fun(){
//     alert("working....")
// }


// function red(){
//     document.body.style.backgroundColor="red"
    
// }
// function blue(){
//     document.body.style.backgroundColor="blue"
    
// }
// function yellow(){
//     document.body.style.backgroundColor="yellow"
    
// }
// function orange(){
//     document.body.style.backgroundColor="orange"
    
// }

//  or by single variable
// function color(cl){
//     document.body.style.backgroundColor=cl
// }

// function fun1(){
//     document.getElementById('head').textContent="chnaged by js"
// }


let count=0
document.getElementById('main')

function inc(){
    count++;
    main.innerHTML=count;
}

function dec(){
    if(count>0){3
        count--;
        main.innerHTML=count;
    }
}