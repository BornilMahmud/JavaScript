// this one means global
let b= /yourname/g

let y= 'yourname is bornil'
console.log (b.test(y))


//this means any character between the a and t 
let a= /a.t/ ;
let n= "alongtime";
let U= "ayt"
console.log(a.test(n))
console.log (a.test(U))

// start with (^) hello and end with world ($)
let g=/^hello/;
let u =/world$/;
let print="hello world";
console.log (g.test(print))
console.log (u.test(print))

