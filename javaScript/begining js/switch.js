let mark = 78;

switch (true ){
  case (mark >100):
    console.log("invalid number");
    break;
  case (mark <=100 && mark >= 80 ):
    console.log("A+");
    break;
  case (mark<80 && mark >=70):
    console.log ("A");
    break;
  case (mark<70 && mark >=60):
    console.log ("B");
    break;
  case (mark<60 && mark >=50):
    console.log ("C");
    break;
  case (mark<50 && mark >=40):
    console.log ("D");
    break;

  default:
    console.log("F")
    break;
  
}