/** 
 * 数组去重，
 * 特性：支持字符型、数值型简单数组；数组对象，可传入判断方法执行判断key
 * 
*/

const dedupe = require('dedupe');

var a = [1, 2, 2, 3]
var b = dedupe(a)


var aa = [{a: 2}, {a: 1}, {a: 1}, {a: 1}]
var bb = dedupe(aa)



var aaa = [{a: 2, b: 1}, {a: 1, b: 2}, {a: 1, b: 2}, {a: 1, b: 4}, {a: {a: 1}, b: {}},{a: {a: 2}, b: 4}]
var bbb = dedupe(aaa, value => value.a)
var ccc = dedupe(aaa)
// console.log(ccc)
console.log(bbb)
