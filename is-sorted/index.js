/**
 * 判断数组是否已经排序，支持函数比较
 */

const sorted = require("is-sorted");

console.log(
    sorted([3, 2, 1], function(a, b) {
        return b - a;
    })
);
