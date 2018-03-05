/** 
 * 通过数组的 value 快速创建 key-value 的对象， 键值重名 
 * 
*/

var mirrarray = require("mirrarray");

var keymirror = mirrarray(['this', 'that', 'another',true]);

console.log(keymirror);