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

// (perc >= 60) ? console.log("Pass sho") : console.log("Fail sho") 

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