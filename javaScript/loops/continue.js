var i;
for (i=0 ; i<10; i=i+1){
  if(i ===5 || i ===8){
    continue;
  }
  console.log(i +" button");
}


for (i=0 ; i<10; i=i+1){
  if(i ===5){
    break;
  }
  console.log(i +" button");
}