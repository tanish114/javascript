// object is a user defined data type 
// used to store multiple type of data
// value in object is stored in key and value
// object is not ordered 
// object we can directly access element as it is unordered 
// denoted by {}

// let emp={
//     name:'tanish',
//     age:22,
//     place:"bhopal"

// }
// console.log((emp));
// console.log((emp.age));
// // to add value inn object
// emp.email="a@gmail.com"
// console.log((emp));

// emp.age=12
// console.log(emp);

let student_detail={
    name:"tanish",
    age:22,
    course:"btech",
    branch:"cse",
    roll_no:"1234",
    city:"bhopal",
    fees:1038136,
    father_name:"mr.ashok",
    mother_name:"ms.shikha",
    brother_name:"aman",
    add:function(){
        return 2+3
    },

    emp_salaray:[13333,12353,12000,1678990],
    emp_account:{
    bank_name: "sbi",
    acc_no:132454678
    }


}


console.log(student_detail.add());

console.log(student_detail.emp_salaray[3]);
console.log(student_detail.emp_account.bank_name);



