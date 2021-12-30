// variables
// loops
// functions
// Arrays
// OBJECTS!!!!!!!
// Javascript Object Notation (JSON)
// Arrow Functions

const persons = [
    {
        "name": "Tufail",
        "age": 28,
        "address": {
            "house": 335,
            "street": 10,
            "sector": "k4",
            "phase": 3
        },
        "gpa": 2.91,
        "courses_names": [
            "C++",
            "Java",
            "Python",
            "Javascript"
        ],
        "courses_marks": [
            50,
            60,
            70,
            80
        ]
    },
    {
        "name": "Faizan",
        "age": 28,
        "address": {
            "house": 335,
            "street": 10,
            "sector": "k4",
            "phase": 3
        },
        "gpa": 2.91,
        "courses_names": [
            "C++",
            "Java",
            "Python",
            "Javascript"
        ],
        "courses_marks": [
            50,
            60,
            70,
            80
        ]
    },
    {
        "name": "Haider",
        "age": 28,
        "address": {
            "house": 335,
            "street": 10,
            "sector": "k4",
            "phase": 3
        },
        "gpa": 2.91,
        "courses_names": [
            "C++",
            "Java",
            "Python",
            "Javascript"
        ],
        "courses_marks": [
            50,
            60,
            70,
            80
        ]
    },
    {
        "name": "Mohsin",
        "age": 28,
        "address": {
            "house": 335,
            "street": 10,
            "sector": "k4",
            "phase": 3
        },
        "gpa": 2.91,
        "courses_names": [
            "C++",
            "Java",
            "Python",
            "Javascript"
        ],
        "courses_marks": [
            50,
            60,
            70,
            80
        ]
    }
]
// const data = [3, 3, 4, 6, 7, 4, 3, 6, 7, 6]

//


// const newArray = data.filter((value) => value > 3)
// function emp(){
//     const a = 10
//     const b = 20

//     console.log("Hello")
//     return a + b;
// }

// console.log(emp())

// const a = 16;
// for (var i = 1; i <= 10; i++){
//     console.log(a+" x "+i+" = "+a*i)
// // }
// let i = 1;
// while(i<=10) {
//     console.log(a+" x "+i+" = "+a*i)
//     i++
// }


// const data = [2, 3, 4, 5, 6, 7, 8, 9, 0, 213, 345, 456, 567, 7689, 34, 5324, 3, 64576, 457, 57, 56, 8756, 87, 6897,68]
// data.push(16);
// data.pop(68)
// for (var i=0; i<data.length; i++){
//     console.log((data[i]))
// }

// console.log(data)

// const persons = [{
//     name: "Faizan Khan",
//     isGraduated: true,
//     age: 24,
//     gpa: 2.87,
//     address: {
//         House: 1,
//         Street: 2,
//     },
//     coursesNames: ["Intro to Materials", "Metals and Alloys", "Inspection and Testing of Materials"],
//     coursesMarks: [93, 99, 85]
// },
// {
//     name: "Adam Khan",
//     isGraduated: false,
//     age: 24,
//     gpa: 3.24,
//     address: {
//         House: 1,
//         Street: 2,
//     },
//     coursesNames: ["Polymers", "Ceramics", "Composites"],
//     coursesMarks: [92, 74, 72]
// },
// {
//     name: "Salman Tariq",
//     isGraduated: true,
//     age: 24,
//     gpa: 3.11,
//     address: {
//         House: 1,
//         Street: 2,
//     },
//     coursesNames: ["Welding and Joining", "Corrosion and Materials Protection", "Nanomaterials"],
//     coursesMarks: [88, 96,59]
// }]

// console.log(persons[1].coursesNames[2])
// console.log(persons[1].coursesMarks[2])

// for (let i = 0; i<persons.length; i++){
//     console.log(persons[i].name)
//     console.log(persons[i].gpa)
//         for (let j=0; j<persons[i].coursesNames.length; j++){
//         console.log(persons[i].coursesNames[j])
//         }
//         console.log()
// }

// const sum = (a, b) => a + b;

// console.log(sum(45, 32))

// for(let i = 0; i<persons.length; i++){
// (!persons[i].isGraduated) && console.log(persons[i])
// }

// const compare = (a1, a2) => (a1 > a2) ? a1 : a2;

// const numbers = [2, 3, 4, 9, 8, 10]

// const even = numbers.filter((num) => num % 2 === 0)

// const odd = numbers.filter((num) => num % 2 === 1)

// console.log("The following numbers in the array are even "+even)
// console.log()
// console.log("The following numbers in the array are odd "+odd)

// const num = 2;
// (num % 2 === 0) ? console.log("It is even") : console.log("The number is odd")

// const square = n => n**2

// numbers.forEach((num) => console.log(square(num)))

// const marks = [90, 95, 99, 80]

// var sum = 0
// marks.forEach((m) => {
//     sum += m
// })
// console.log(sum)
// const avg = sum/marks.length
// const perc = (sum/400)*100
// console.log(avg)
// console.log(perc+"%");

// (perc >= 60) ? console.log("Pass sho") : console.log("Sar ye ukhwaro")

// const num1 = 7, num2 = 5, num3 = 8

// if (num1 > num2 && num1 > num3) console.log(num1)
// else if ( num2 > num1 && num2 > num3) console.log(num2)
// else console.log(num3)

// const alphabet = "x";

// if (alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "u" ) console.log(alphabet+" is a vowel")
// else console.log(alphabet+" is not a vowel")


// const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// const vowels = alphabets.filter((alp) => alp==="a" || alp==="e" || alp==="i" || alp==="o" || alp==="u" )
// console.log(vowels)

// Maps
// const squares = [];
// const data1 = [33, 3, 4, 6, 7, 4, 3, 6, 7, 6]
// const names = ["Faizan", "Uzair", "Tufail", "Fawad", "Usama"]
// const data2 = data1.map(n => n * n)
// const marks = [];
// for(let i=0;i<data1.length;i++) {
//     squares[i] = data1[i] * data1[i];
// }

// data1.forEach((n) => {
//     squares[i] = n * n;
// })
// Find

// const result = names.find((name) => name === "xyz")

// if (result) {
//     console.log("Yah we found it!")
// }
// else {
//     console.log("Not found :(")
// }

// Reduce
// const r = data1.reduce((prev, next) => prev + next, 0)
// console.log(r)

// const t2 = data1
//     .map((n) => n * n)
//     .filter((n) => n > 5)
//     .sort((a, b) => a - b)


// console.log(t2)

// Find
// Fill
// Sort
// const t = data1.sort()
// const t = data1.sort((a, b) => b - a)

// console.log(t)
// Reverse

// Strings

// const firstName = "Faizan";
// const lastName = "Khan";
// // Template Literals
// console.log("Hello " + firstName + " " + lastName)
// console.log(`Hello ${firstName} ${lastName} and length is ${firstName.length + lastName.length}`)

// const greeting = `1, tufail, "tufail is a very good person, and his location is tahkal"`
// const greeting = `FaizanKhanFaizan@gmail.com`

// const data = greeting.split("|")

// console.log(data)

// const result = greeting.replace("Faizan", "Uzair")
// const result2 = greeting.indexOf("Khan")
// console.log(result2)

// const arr1 = [20,30,50];
// const arr2 = [2, 2, 2, ...arr1, 2, 2]

// DESTRUCTORING


const myData = {
    "name": "Tufail",
    "age": 28,
    "address": {
        "house": 335,
        "street": 10,
        "sector": "k4",
        "phase": 3
    },
    "gpa": 2.91,
    "courses_names": [
        "C++",
        "Java",
        "Python",
        "Javascript"
    ],
    "courses_marks": [
        50,
        60,
        70,
        80
    ]
}

// const age = myData.age;
// const name = myData.name;
// const gpa = myData.gpa;

// const printData = ({ name, age, gpa }) => {
//     console.log(name)
//     console.log(age)
//     console.log(gpa)
// }
// printData(myData[0])
// const { name, age, gpa } = myData;

const coord = [45.5, 32.45]

const new_data = {
    ...myData,
    "latlon": coord
}

// Regular Expressions
// Object Destructoring
// Array Destructoring
// Spread Operator
    // Arrays and Objects

// switch
// const data = ["b", 'c', 'd','e','f','x','a','i','w','u','z', 'o']

// let vowel = 0
// let nonvowel = 0;
// // data.forEach (a => {
// //     switch(a) {
// //         case 'a':
// //         case 'e':
// //         case 'i':
// //         case 'o':
// //         case 'u':
// //             vowel++;
// //             break;           
// //         default:
// //             nonvowel++;
// //     }
// // // if ( a === "a" || a === "e" || a === "i" || a === "o" || a === "u") {
// // //     vowel++
// // // }
// // } )
// // console.log(vowel)


// // const num = 11
// // switch (num % 2 === 0 ) {
// //         case 0:
// //             console.log("Even")
// //             break;
        
// //         default:
// //             console.log("Odd")
// // }

// const weekday = 9
// switch (weekday) {
//         case 1:
//             console.log("Monday")
//             break;

//         case 2:
//             console.log("Tuesday")
//             break;

//         case 3:
//             console.log("Wednesday")
//             break;

//         case 4:
//             console.log("Thursday")
//             break;

//         case 5:
//             console.log("Friday")
//             break;

//         case 6:
//             console.log("Saturday")
//             break;

//         case 7:
//             console.log("Sunday")
//             break;

//         default:
//             console.log("Not a valid entry")
// }

const date = "30-4-1997";
let [day, month, year] = date.split("-")
// console.log(newArr)

// const day = newArr[0]
// const month = newArr[1]
// const year = newArr[2]
switch(month) {
    case "1":
        month = "January" 
        break;
    case "2":
        month = "February" 
        break;
    case "3":
        month = "March" 
        break;
    case "4":
        month = "April" 
        break;
    case "5":
        month = "May" 
        break;
    case "6":
        month = "June" 
        break;
    case "7":
        month = "July" 
        break;
    case "8":
        month = "August" 
        break;
    case "9":
        month = "September" 
        break;
    case "10":
        month = "October" 
        break;
    case "11":
        month = "November" 
        break;
    case "12":
        month = "December" 
        break;
    
    default:
        month = "err"
}
console.log(`${day}-${month}-${year}`)