/** 
 * filledArray(filler, count)
 * 
 * 使用指定的元素，生成数组，可以传递一个函数返回特定的元素
 * 
*/

const filledArray = require('filled-array');
// console.log(filledArray(32, 3))

const arr = filledArray(i => {
	return (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
}, 15);

console.log(arr);