// var classMates = ["Chidimma", "Eunice", "Jubril", "Rasheed", "Korede", "Me"]

// classMates[0] = "Lee"

// classMates.push("Fiyinoluwa")

// classMates.unshift("Mubarak")

// // console.log(classMates.length)

// // console.log(classMates[3])

// console.log(classMates)

// var candidate = 'T-pains'

// if (candidate === 'T-pain') {
// console.log("More pain for you")
// } else {
//     console.log("less pain for you")
// }

// var inecAgeChecker = 72
// if (inecAgeChecker >= 70) {
//     console.log("Please stay at home don't come and vote")
// } else {
//     console.log("come out and vote")
// }

// multiple condition

// var occupation = "police"
// if (occupation === "Medicine"){
//     console.log("You are a Doctor")
// } else if(occupation === "Painter"){
//     console.log("You are an artist")
// } else if (occupation === "police"){
//     console.log("You are a Olopa")
// } else {
//     console.log("You are a tech bro")
// }

// var me = {
//   firstname: "Muhammed",
//   lastname: "Oyebanji",
//   age: 16,
//   email: "muhammedoyebanji@gmail.com",
//   School: "Kwara Polytechnic, Ilorin",
//   Course: "Computer Science",
//   Level: "HND II",
//   hobbies: ['Coding', 'Gaming'],
//   address: {
//     street: "Yaba",
//     city: "Lagos",
//     country: "Nigeria"
//   }
    
// };

// console.log(me)

// function declaration
// function greeting(){
//     console.log("Hello Everyone")
// }

// function sum (){
//     console.log(5 + 5)
// }

// // function execution

// greeting()

// sum()

// function profit(cp, sp){
//     var gain = sp - cp
//     console.log(gain)
// }

// profit(5000, 11000)

// function loss(sp, cp){
//     var lost = cp - sp
//     console.log(lost)
// }

// loss(9000, 11000)

// profit(15000, 33000)

// function area (l){
//     var area = l**2
//     console.log(area)
// }

// area(5)

// function cylinder (r, h){
//     var cylinder = 2 * Math.PI * r * (h + r)
//     console.log(cylinder)
// }

// cylinder(2, 6)

function percentageProfit(cp, sp){
    var percentageProfit = (sp - cp)/cp * 100
    console.log(percentageProfit)
}

percentageProfit(1000, 4000)

function addition(a, b){
    var addition = (a + b)
    console.log(addition)
}

addition(10, 9)

function celsiusToFahrenheit(celsius){
    var celsiusToFahrenheit = (celsius * 9/5) + 32
    console.log(celsiusToFahrenheit)
}

celsiusToFahrenheit(100)