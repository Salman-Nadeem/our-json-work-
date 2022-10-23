// Object Literals
var obj = {

    name: "Hassan",
    contact:"031265468 ",
    age: 20,
    email:"abc@gmail.com"
} 

console.log(obj.name)
document.write(obj.name)
console.log(obj)

var json = JSON.stringify(obj)
document.write(json)
var convertedObj = JSON.parse(json)
console.log(convertedObj)

console.log(json)
// document.write(json)
// console.log(json)