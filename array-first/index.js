/** 
 * 获取数组的第一个元素， 可以传递一个长度参数，返回从头部开始指定长度的元素的数组
*/


const first = require('array-first');

const frist = first(['a', 'b', 'c', 'd', 'e', 'f'], "3");
const objFrist = first([{a: 'a'},{ b: 'b'}]);
// const errorFrist = first({a: 'a'});

console.log(frist);