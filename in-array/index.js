/** 
 * 如果值存在于数组中，返回 true
 * 比 indexOf 速度更快，前不用担心 null 的问题
*/


var inArray = require('in-array');
console.log(inArray(['a', 'b', 'c'], 'a'));