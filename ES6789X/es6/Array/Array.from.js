/**
 * @description - 从一个类似数组或可迭代对象中创建一个新的数组实例(伪数组对象:拥有一个 length 属性和若干索引属性的任意对象;可迭代对象:可以获取对象中的元素,如 Map和 Set 等)
 * @param arrayLike - 想要转换成数组的伪数组对象或可迭代对象.
 * @param mapFn - 可选参数，如果指定了该参数，新数组中的每个元素会执行该回调函数.
 * @param thisArg - 可选参数，执行回调函数 mapFn 时 this 对象.
 * @return { Array } - 一个新的数组实例
 * Array.from(arrayLike[, mapFn[, thisArg]])
 */

// Array from a String
console.log(Array.from("dxg")); //[ 'd', 'x', 'g' ]

// Array from a Set
let s = new Set(["foo", "window"]);
console.log(Array.from(s)); //[ 'foo', 'window' ]

// Array from a Map
let m = new Map([[1, 2], [2, 4], [4, 8]]);
console.log(Array.from(m)); // [ [ 1, 2 ], [ 2, 4 ], [ 4, 8 ] ]

// Array from an Array-like object (arguments)
function f() {
  return Array.from(arguments);
}
console.log(f(1, 2, 3)); //[ 1, 2, 3 ]

// 在Array.from中使用箭头函数
console.log(Array.from([1, 2, 3], x => x + x)); // [ 2, 4, 6 ]

// 伪数组
Array.from({ length: 5 }); // [undefined, undefined, undefined, undefined, undefined]
Array.from({ length: 5 }, (v, i) => i); // [0, 1, 2, 3, 4]
