/** 
 * 遍历对象的 key value 加入到数组中
 * 
*/

const mapArray = require('map-array');
const obj = {
  giorgio: 'Bianchi',
  gino: 'Rossi'
};

console.log(mapArray(obj, (key, value) => key + ' ' + value));