//Exercise 2 Start
console.log('Exercise 2 Start');


/*  Instructions
    Write a JavaScript program that returns true if a string 
    starts with 'prog' and false otherwise. 

    Run the variables below through your program and output 
    the result to console.log. 
*/

let test5 = 'prgrmmng';
let test6 = 'pr0gressive';
let test7 = 'program';
let test8 = 'progressive';


function start_spec_str(str)
{
  if (str.length < 4)
  {
    return false;
  }
  front = str.substring(0, 4)
  if (front == 'prog') 
  {
    return true;
  }
   else 
   {
    return false;
  }
}

console.log(start_spec_str('prgrmmng'));
console.log(start_spec_str('pr0gressive'));
console.log(start_spec_str('program'));
console.log(start_spec_str('progressive'));
                           