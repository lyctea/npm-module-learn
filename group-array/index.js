/** 
 * 将对象数组分组到列表中
 * 
*/

var groupArray = require('group-array');


var arr = [
    {tag: 'one', content: 'A'},
    {tag: 'one', content: 'B'},
    {tag: 'two', content: 'C'},
    {tag: 'two', content: 'D'},
    {tag: 'three', content: 'E'},
    {tag: 'three', content: 'F'}
  ];
  
  // group by the `tag` property
//   groupArray(arr, 'tag');

  console.log(groupArray(arr, 'tag'));