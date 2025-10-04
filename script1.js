//  if else family
// if(only true),if then else(works on single true and false),ladder if else(mutliple condition),
// nested if else(on the basis of true if more condition are being formed then we use it)
// syntax 
//  if (condition) 
// { 
// }

// else {
// }

// check wheaather positive or negative
// let n=parseInt(prompt("enter a number"))
// if (n>0) {
//     console.log("positive")
// }
// else {
//     console.log("negative");
    
// }

// wap take two int from user and find greatest among two
// n1=parseInt(prompt("enter a number"))
// n2=parseInt(prompt("enter a number"))

// if (n1>n2) {
//     console.log("n1 is greatest")
// }
// else {
//     console.log("n2 is greatest")
// }


// even 
// n1=parseInt(prompt("enter a number"))
// if(n1%2==0) {
//     console.log("even")
// }
// else {
//     console.log("odd");
    
// }


// wap three input from user check 2nd input is even or odd. if second number is even then print multiplication of three input

// let n1=parseInt(prompt("enter a number"))
// let n2=parseInt(prompt("enter a number"))
// let n3=parseInt(prompt("enter a number"))

// if (n2%2==0) {
//     console.log(n1*n2*n3);
    
// }
// else {
//     console.log(n1+n2+n3);
    
// }

// ladder if else

    // syntax
// if(condition) {
//  code
//   }
// else if(consition) {
// code
// }
// else {
    // }

    // question +ve,-ve,zero
// n1=parseInt(prompt("enter a number"))
// if(n1>0) {
//     console.log("psoitive");
    
// }
// else if(n1<0) {
//     console.log("negative");
    
// }
// else{
//     console.log("neutral");
    
// }


// check which is greatest or is equal


// n1=parseInt(prompt("enter a number"))
// n2=parseInt(prompt("enter a number"))

// if(n1>n2) {
//     console.log("n1 is greater");
    
// }
// else if(n1<n2) {
//     console.log("n2 is greater")
// }
// else{
//     console.log("equal")
// }

// nested if else 

// question 1
// let age=parseInt(prompt("enter your age"))

// if (age>=18) {
//     let b=parseInt(prompt("press 1 if you are indian"))
//     if(b==1) {
//         console.log("you are eligible to vote");
//     }
//     else {
//         alert("not inidan");
//     }
// } 
// else {
//     alert("underage")
// }

// question 2f
// a=parseInt(prompt("enter your number"))

// if(a>0) {
// if(a%2==0) {
//     console.log("square is ",a*a)
// }
// else{
//     console.log("area of circle is ",3.14*a*a)
// }
// }
// else{
// if(a==-3) {
//     console.log(a)
// }
// else {
//     console.log("not equal to -3")
// }
// }

// let  a=10
// do{
//     console.log("tv");
//     a++
// } while(a<10)

// let a=10
// do{
//     console.log(a)
//     a--
// } while(a>=1)

// let a
// do {
//      a=parseInt(prompt("enter a number"))
// } while(a!=0)


// while loop

// question 1
// let a=parseInt(prompt("enter a number"))
// let i=1
// while(i<=10) {
//     console.log(a*i)
//     a++  
// }



// question 2
// wap to print sum og all numbers between 15 to 1

// let a=15
// let sum=0
// while(a>=1) {
//     sum +=a
//     a--
// }
// console.log(sum)

// for loop

// wap to print sum of all odd number between 1 to 15
// let sum=0
// for (let a=1;a<=15;a++) {
//     if(a%2!=0){
//         sum+=a
//     }
// }
// console.log(sum);


// nested for loop 

// question *****
//          *****
//          *****
// let j=0 
// for (i=1;i<=3;i++){
//     for (j=1;j<=5;j++){
//         document.write("*"); 
//     }
//     document.write("<br>")
// }


// question(right angle triangle)
// for(let r=1;r<=4;r++) {
//     for(let c=1;c<=r;c++){
//         document.write("*")
//     }
//     document.write("<br>")
// }


// reverse hw

// hollow square 
// for(let r=1;r<=5;r++){
//     for(let c=1;c<=5;c++){
//         if(r==1 || r==5 || c==1 || c==5){
//             document.write("*")
//         }
//         else{
//             document.write("&nbsp&nbsp")
//         }
//     }
//     document.write("<br>")
// }




// *      *
//   *   *
//     * 
//    *  *
//  *      *


// for(let r=1;r<=5;r++){
//     for(let c=1;c<=5;c++){
//         if(r==c || r+c==6){
//             document.write("*")
//         }
//         else{
//             document.write("&nbsp&nbsp")
//         }
//     }
//     document.write("<br>")
// }


// functions  
// function sum() {
//     let n1=10
//     let n2=30
//     console.log(n1+n2)
// }
// sum()


// wap to find area of rectangle
// function area(){
//     let a=parseInt(prompt("enter length"))
//     let b=parseInt(prompt("enter breadth"))

//     console.log(a*b)
// }
// area()

// user defined function

// wap to take input from int user and check even odd using type 2 fun
//  let a=parseInt(prompt("enter a number")) 
//   function num(a){
//     if(a%2==0){
//         console.log("even")
//     }
//     else{
//         console.log("odd")
//      }
//   }
//   num(a)


// wap tp print reverse table of any number using type 2 no arg no return
// a=parseInt(prompt("enter a number"))

// function table(a){
// for(let i=10;i>=1;i--){
//     console.log(a*i)
// }
// }
// table(a)


// arrow function
// annoynyamous function 














