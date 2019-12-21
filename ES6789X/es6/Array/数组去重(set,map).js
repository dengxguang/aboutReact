/**
 * Set 简单数组去重
 */

let arr = [5, 1, 2, 2, 3, 2, 3, 4, 5];
let arr1 = [{ user: "dxg", age: 12 }, { user: "d", age: 12 }, { user: "s", age: 12 }, { user: "d", age: 12 }, { user: "f", age: 12 }, { user: "g", age: 12 }, { user: "g", age: 13 }, { user: "dxg", age: 12 }, { user: "dxg", age: 12 }];
const simplenessUnique = arr => [...new Set(arr)];

// console.log(simplenessUnique(arr));
// 过滤不了
function unique22(arr) {
  const map = new Map();
  return arr.filter(item => !map.has(item) && map.set(item, 1));
}

// function unique1(arr) {
//   const map = new Map();
//   return arr.filter(item => !map.has(JSON.stringify(item)) && map.set(JSON.stringify(item), 1));
// }

// function unique2(arr) {
//   return [...new Set(arr.map(e => JSON.stringify(e)))].map(e => JSON.parse(e));
// }
const unique2 = arr => [...new Set(arr.map(e => JSON.stringify(e)))].map(e => JSON.parse(e));
console.log(unique2(arr1));
