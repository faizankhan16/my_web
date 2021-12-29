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

    // persons.map((person) =>{
    //     const newGPA = person.gpa + 2    
    //     console.log(newGPA)        
    //     });
    
    // persons.map((person) => {
    //     var sum = 0
    //     person.coursesMarks.forEach(num => {
    //         sum = sum + num
            
    //     });
    //     console.log(person.name+" = "+(sum/(person.coursesMarks.length)))
    // })

//     const grad = persons.filter((person) => !person.isGraduated)
//     console.log(grad)

// const alphabet = 'z';
// const vowelsArray = ["a", "e", "i", "o", "u"];

// // if (alphabet === "a" || alphabet === "e" || alphabet === "i" || alphabet === "o" || alphabet === "u" ) console.log(alphabet+" is a vowel")
// // else console.log(alphabet+" is not a vowel")

// const index = vowelsArray.indexOf(alphabet);
// index === -1 ? console.log(alphabet+" is not a vowel") : console.log(alphabet+" is a vowel")

// const data1 = [9, 8, 7, 6, 5, 4, 3, 2, 1]

// const data2 = data1.map((n) => n*n)
// console.log(data2)

// data1.forEach((n) => console.log(n*n))

// const n = persons.find(person => person.gpa === 2.45)
// console.log(n.gpa)

// if(0) console.log("hello")

// var flag = 0
// persons.forEach((person) =>  flag++)
// console.log(flag)

// data1 = [2, 3, 1, 55, 13, 124, 6, 161, 636, 4, 11, 61]

// const ass = data1.sort((a, b) => a - b)
// console.log(ass)

// const des = data1.sort((a, b) => b - a)
// console.log(des)

// const sum = data1.reduce((prev, next) => prev+next, 0);
// console.log(sum)

// const t2 = data1
//                 .map((n) => n**5)
//                 .filter((n) => n>500)
//                 .sort((a, b) => a-b)

// console.log(t2)

// const firstName = "Faizan"
// const lastName = "Khan"

// console.log(`My name is ${firstName} ${lastName} and the length is ${firstName.length }`)

// const greeting = "Hello, welcome to, Peshawar!"

// console.log(greeting.charAt(26))
// console.log(greeting.lastIndexOf('r'))

// for (i=0; i<=greeting.length; i++){
//     console.log(greeting.charAt(i)) }

// const text =   "1, Tufail, Tufail is a great person, Tufail is our senior"
// console.log(text.toUpperCase())
// console.log(text.slice(3,text.length))
// console.log(text.replace(/Tufail/g, "Uzair"))

// const array = {
//     "name":"John",
//     "age":30,
//     "city":"New York"
// }
// // console.log(array)
// // const array2 = array.filter((a) => a.length>=3)
// // console.log(array2)
// // const revArray2 = array2.join(" ")
// // console.log(revArray2)
// const newText = JSON.stringify(array)
// console.log(JSON.parse(newText))

// const newArray = JSON.parse(newText)

// const no = 5;
// var fact = 1;

// for (i=no ; i>=1; i--){
//      fact = fact*i
//     }
//     console.log(`The factorial of ${no} is ${fact}`)

// for(var i=20 ; i>=1 ; i--){
//     for(var k=20 ; k>i ; k--){
//         process.stdout.write(' ');
//     }
//     for(var j=i ; j>=1 ; j--){
//         process.stdout.write('*');
//     }
//     for(var l=i ; l>=1 ; l--){
//         process.stdout.write('*');
//     }
//     console.log()
// }
// for(var i=1 ; i<=20 ; i++){
//     for(var k=20 ; k>i ; k--){
//         process.stdout.write(' ');
//     }
//     for(var j=i ; j>=1 ; j--){
//         process.stdout.write('*');
//     }
//     for(var l=i ; l>=1 ; l--){
//         process.stdout.write('*'); 
//     }
//     console.log()
// }
// console.log("           Happy christmas!")


// let selColor = ['red', 'green']

// console.log(selColor.filter(a => a.length>2)[0])
// console.log(selColor.filter(a => a.length>2)[1])

// const nums = ["1", "3", "7", "9", "23", "41", "11", "19", "52"]

// const opp = nums.map(a => parseInt(a)).sort((a, b) => b-a)

// console.log(opp)
// if()
// for (var i=2; i<=nums; i++){
//     if (nums%i === 0){
//     console.log(`prime number`)}

// }

// nums.forEach(a => console.log(a))
let arr = []
for(var i=0; i<100; i++){
const r = Math.floor((Math.random() * 100) + 1);
arr[i] = r
}
console.log(arr)
