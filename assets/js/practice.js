"use strict";




function getStudentCountByEmail(str) {

    let students = getStudents();

    let count = 0;

    for (const stu of students) {
        if (stu.email.includes(str)) {
            count++;
        }
    }

    return count;

}

// console.log(getStudentCountByEmail("e"))



function getStudents() {

    let stu1 = {
        name: "Pervin",
        email: "pervin007@gmail.com"
    }

    let stu2 = {
        name: "cavid",
        email: "cavid@gmail.com"
    }

    let stu3 = {
        name: "Saiq",
        email: "saiq@gmail.com"
    }

    let stu4 = {
        name: "Eli",
        email: "eli@gmail.com"
    }

    let students = [stu1, stu2, stu3, stu4];

    return students;

}



// const getBirthdayYear = age => {
//     let date = new Date();

//     let year = date.getFullYear();

//     return year - age
// }


// console.log(getBirthdayYear(22))


// let date = new Date();

// console.log(typeof date)




let address = "Ehmedli merkez seherdir";

// for (let i = 0; i < array.length; i++) {
//     console.log(address[i])
// }

// console.log(address.length)

// console.log(address[0])

// console.log(address.charAt(0))

// console.log(address.charCodeAt(1))

// document.querySelector("button").addEventListener()

// console.log(address.toUpperCase())

// console.log(address.split(""))

// console.log(address.trimEnd())

// console.log(address.slice(2))

// let text = "sdjhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"

// if (text.lenght > 10) {

//     console.log(text.substring(1,10) + "...")

// }

// console.log(address.substring(1,3))


// let text = "Salam Anar bey Anar";

// console.log(text.replace("Anar", "Mubariz"))


// let text1 = "Hello";

// let text2 = "World";


// let res = text1.concat(text2);

// console.log(res);


// const strToUpper = str => {
// return str.charAt(0).toUpperCase().concat(str.slice(1))
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }

// console.log(strToUpper("hello"))

// let text = "salam";

// let result = text[0].toUpperCase();

// let res = text.replace(text.charAt(0), result)

// console.log(res)





// console.log(students[student.length-1])

// let result = students.join();


// console.log(students);

// students.pop();

// students.push("Elekber")

// students.shift();

// students.unshift("Hacker");

// console.log(students);


// let students = ["Ravid", "Jale", "roya", "Konul", "Anar"];

// let text = "R"

// function filter(arr, text) {
//     let result = [];
//     for (const item of arr) {
//         if (item.toLowerCase().startsWith(text.toLowerCase())) {
//             result.push(item)
//         }
//     }

//     return result;
// }


// console.log(filter(students, text));


// console.log(students.lastIndexOf("Jale"))

// let result = students.find(m => m == "Jale");

// students.sort();

// console.log(students)

// students.reverse();

// console.log([3,8,-10,23,19,-4,-14,27].sort((a,b)=>b-a))

// students.fill("Eli")

// console.log(students)

// console.log(students.every(m => m == "Cinare"))

// let arr = [10, 20, 30, 40, 5, 6, 7];

// console.log(arr.every(m => m > 4))



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const f = fruits.entries();

// for (const iterator of f) {
//     console.log(iterator)
// }

// let arr = [10, 20, 30, 40, 5, 6, 7];

// console.log(arr.findIndex(m => m>20))

// console.log(arr.includes(100))

// console.log(Array.isArray(arr))


// let text = "ABCDHG"

// const myArr = Array.from(text);

// console.log(myArr)

// console.log(arr.slice(2, 5))

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(2,0, "Lemon", "Kiwi");

// console.log(fruits);


// console.log(arr.toString())



// let age = "55";
// let age2 = "33";

// console.log(typeof age.toString())

// console.log(Number (age) + Number(age2)) 

// console.log(typeof parseInt(age))


// function getNums(num1,...arr) {
//     console.log(arr)
// }

// getNums(1,2,3,4,5,6)

// let test = (...arr) => {
//     console.log(arr)
// }

// test(1,2,3)

// let arr1 = [1,2,3,4,5]

//    let copyArr = [...arr1];

//    console.log(copyArr)

//    arr1[0] = 10;

//    console.log(arr1)

let user1 = {
    name: "Saiq",
    address: "Ehmedli"
}

console.log(user1)

let copyUser1 = {...user1};

console.log(copyUser1)





//task

function reverseString(str) {
    let reverseStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reverseStr += str[i]
    }

    return reverseStr;
}

// console.log(reverseString("Elcan"));