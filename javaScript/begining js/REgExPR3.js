// this is for checking the number is start with num and end with num
 // main is /\d/ for num  or  multiple num /\d+/

let num = "23425323"
let num2 = "32543543st"
console.log (/^\d+$/.test(num))
console.log (/^\d+$/.test(num2))

// lets try with name 
let name = "Bornil Mahmud"
let result = name.replace(/Bornil/ , "Opsin")
console.log (/[a-zA-Z]/.test(name))
console.log (/^[a-z]+$/.test(name))
console.log(result)

