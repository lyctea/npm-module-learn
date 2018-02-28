/** 
 * 返回第一个数组的唯一值，比较时使用严格相等
 * 特性：如果第二个参数不是数组，则无效返回原数组
 * 实现：遍历数组，相同元素舍弃，存在多个数组，则循环多次
*/
var diff = require('arr-diff');

var a = ['a', 'b', 'c', 'd'];
var b = ['b', 'c'];
var c = ['d'];

console.log(diff(a, b, c))