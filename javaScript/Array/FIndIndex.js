const array = [2,61,22,45,32,30,21,24,25,6]

let result =array.findIndex(myfunction)

// this will get first element from the array then exit !

function myfunction(value,index,array) {
  return value >30;
}
console.log(result);
let pos = array.findLastIndex(x=>x >21);

console.log(pos);
