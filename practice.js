// const num1 = 9, num2 = 4, num3 = 6, num4 = 8
// if (num1>num2 && num1>num3 && num1>num4) console.log(num1)
// else if (num2>num1 && num2>num3 && num2>num4) console.log(num2)
// else if (num3>num1 && num3>num2 && num3>num4) console.log(num3)
// else console.log(num4)


// const numbers = [2, 3, 4, 8, 9, 10]
// const odd = numbers.filter((num) => num%2 === 1); console.log("Odd numbers are: "+odd)
// const even = numbers.filter((num) => num%2 === 0); console.log("Even numbers are: "+even)


// const num = [4, 8, 16]
// const square = n => n*n
// num.forEach((num) => console.log(square(num)))


// const marks = [10, 85, 39, 40]
// var sum = 0
// marks.forEach((num) => sum = sum+num); console.log(sum)
// console.log(sum/marks.length)
// const perc = (sum/(marks.length * 100))*100
// console.log(perc+"%");

// (perc>=60) ? console.log("Pass sho") : console.log("Sar ye ukhwaro")

// const num = 1003;
// for (i=1; i<=10; i++){
//     console.log(num+" * "+i+" = "+num*i)
// }

// const persons = [{
//         name: "Faizan Khan",
//         isGraduated: true,
//         age: 24,
//         gpa: 2.87,
//         address: {
//             House: 1,
//             Street: 2,
//         },
//         coursesNames: ["Intro to Materials", "Metals and Alloys", "Inspection and Testing of Materials"],
//         coursesMarks: [93, 99, 85]
//     },
//     {
//         name: "Adam Khan",
//         isGraduated: false,
//         age: 24,
//         gpa: 3.24,
//         address: {
//             House: 1,
//             Street: 2,
//         },
//         coursesNames: ["Polymers", "Ceramics", "Composites"],
//         coursesMarks: [92, 74, 72]
//     },
//     {
//         name: "Salman Tariq",
//         isGraduated: true,
//         age: 24,
//         gpa: 3.11,
//         address: {
//             House: 1,
//             Street: 2,
//         },
//         coursesNames: ["Welding and Joining", "Corrosion and Materials Protection", "Nanomaterials"],
//         coursesMarks: [88, 96,59]
//     }]

//     const grad = persons.filter((person) => !person.isGraduated)
//     console.log(grad)

const alphabet = 'x';
const vowelsArray = ["a", "e", "i", "o", "u"];

// if (alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "u" ) console.log(alphabet+" is a vowel")
// else console.log(alphabet+" is not a vowel")

const index = vowelsArray.indexOf(alphabet);
index === -1 ? console.log(alphabet+" is not a vowel") : console.log(alphabet+" is a vowel")