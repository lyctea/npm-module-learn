/** 
 * 递归扁平化数组
 * 特性：如果元素是数组，递归数组，如果不是数组，则加入到新数组中，最后返回
 * 
*/

var flatten = require("arr-flatten");

// const result = flatten(["a", ["b", ["c", ["c"], {obj: 'obj' }]], "d", ["e"], "e"]);

const result = flatten([{obj: {obj: 'obj' } },{obj: 'obj' },{obj: 'obj' }]);

console.log(result);
