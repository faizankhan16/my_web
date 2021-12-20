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
// // data.push(16);
// // data.pop(68)
// // for (var i=0; i<data.length; i++){
// //     console.log((data[i]))
// // }

// console.log(data)

const persons = [{
    name: "Faizan Khan",
    age: 24,
    gpa: 2.87,
    address: {
        House: 1,
        Street: 2,
    },
    coursesNames: ["Intro to Materials", "Metals and Alloys", "Inspection and Testing of Materials"],
    coursesMarks: [93, 99, 85]
},
{
    name: "Adam Khan",
    age: 24,
    gpa: 3.24,
    address: {
        House: 1,
        Street: 2,
    },
    coursesNames: ["Polymers", "Ceramics", "Composites"],
    coursesMarks: [92, 74, 72]
},
{
    name: "Salman Tariq",
    age: 24,
    gpa: 3.11,
    address: {
        House: 1,
        Street: 2,
    },
    coursesNames: ["Welding and Joining", "Corrosion and Materials Protection", "Nanomaterials"],
    coursesMarks: [88, 96,59]
}]

// console.log(persons[1].coursesNames[2])
// console.log(persons[1].coursesMarks[2])

for (let i = 0; i<persons.length; i++){
    console.log(persons[i].name)
    console.log(persons[i].gpa)
        for (let j=0; j<persons[i].coursesNames.length; j++){
        console.log(persons[i].coursesNames[j])
        }
        console.log()
}
