/** 
 * 有效的移除数组元素，而不进行分割
 * 算法实现： 元素最后一位出栈，对于元素进行交换，如果是最后的元素，直接返回
 * 
*/

var remove = require('unordered-array-remove')

var list = ['a', 'b', 'c', 'd', 'e']
remove(list, 2) // remove 'c'
console.log(list) // returns ['a', 'b', 'e', 'd'] (no 'c')