/** 
 * 产生指定范围的密集数组
 * 
*/
const range = require('array-range');

console.log(range("6","10"))

var array = require('array-range')

array(5).map( x => x*x );
// -> [ 0, 1, 4, 9, 16 ]

array(2, 10).filter( x => x%2===0 );
// -> [ 2, 4, 6, 8 ]