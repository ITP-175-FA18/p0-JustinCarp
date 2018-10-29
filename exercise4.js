//Exercise 4 Start
console.log('Exercise 4 Start');

/*  Instructions
    Write a JavaScript program that accepts an array of strings
    and returns the largest string given. If multiple strings in
    the array have the same length, return the first one of the 
    longest length.

    Run the variables below through your program and output 
    the result to console.log. 
*/

let test13 = ['a', 'aa', 'aaa'];
let test14 = ['asdf', 'qwer', 'zxcv'];
let test15 = ['asdfasdf fdasdf a sd f', ' asdfsdf', 'asdfasdfds', 'asdfsdf', 'asdfsdaf'];
let test16 = ['ddd','dddddddd','dddd','ddddd','ddd','dd','d','d','dddddddddddd'];


function findLongest(array){

  var length=0;

  var longest="";

  for(var i=0;i<array.length;i++){
 
  if(array[i].length>length){
  
  length=array[i].length;
  
  longest=array[i];
  }
}
 return "String : "+longest
}

console.log(findLongest(test13));
console.log(findLongest(test14));
console.log(findLongest(test15));
console.log(findLongest(test16));