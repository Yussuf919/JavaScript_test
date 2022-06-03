//Number 1
/*let integer = [2,6];
console. log(integer[1]);
document.getElementById('demo1').innerHTML = integer[1];*/
//program that accept two imtegers and displays the highest.
function number(){
  //A functional button that pops up a window to allow user input two different integers and prints out the highest integer.
  
  //let the two  variables = num1 and num2.
num1 = window.prompt("Input the First integer");
//allows users to input their first integer

num2 = window.prompt("Input the second integer");
 //allows users to input their secont integer.                                              
if(num1 > num2) 
  { 
   alert("The largest number between "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
  //alerts the first integer if it is greater than the second.
  
else
  if(num2 > num1) 
  {
  alert("The largest number between "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }              
  //alerts the second integer if it is greater than the first
  
else
  if(num1 = num2)
  {
   alert("The values "+ num1+ " and "+num2+ " are equal.");
  }
  //alerts that the integers are equal 
}

//javascript sort method
function sort(){
const sort = [0,-1,4];
sort.sort();
sort.reverse();
alert(sort);
}

//javascript find method
function find(){
 const values = [-5,-2,-6,0,-1];
 const largerValue = values.find(find);
 function find(values){
   return values > -1;
 }
 
 alert(largerValue);
}