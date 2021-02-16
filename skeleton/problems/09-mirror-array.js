/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

function mirrorArray(array) {
  // your code here...
  //make empty array
  //iterate over array backwords.
  // ADDD each iteration to the previos array 
 
    for(let i  = array.length - 1; i > -1; i--){
      array.push(array[i]);
      
    }
    console.log(array);
    return array;
}
mirrorArray([1,2,3]);
mirrorArray(['a', 'b', 'c', 'd']);
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mirrorArray;
