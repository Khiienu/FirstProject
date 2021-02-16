/*******************************************************************************
Write a function evenRange(start, end) that returns an array containing all even
numbers between 'start' and 'end' in sequential order.

Examples:

evenRange(13, 20) => [ 14, 16, 18, 20 ]
evenRange(4, 11) => [ 4, 6, 8, 10 ]
evenRange(8, 5) => []
*******************************************************************************/

function evenRange(start, end) {
  let arr =  [];
    for(let i = start; i < end + 1; i++){
      if(i % 2 === 0){
        arr.push(i);
      }
    }  
    console.log(arr);
    return arr;
}

evenRange(13, 20) ;
evenRange(4, 11) ;
evenRange(8, 5) ;

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = evenRange;
