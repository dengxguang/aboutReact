/**
 * arr.every(callback[, thisArg])
 * @description - 测试数组的元素是否至少一个通过了指定函数的测试。
 * @param callback - 用来测试每个元素的函数。
 * @param thisArg - 执行 callback 时使用的 this 值。
 * @return { Boolean } - 是否通过测试。
 */

function isBiggerThan10(element, index, array) {
  return element > 10;
}
console.log([2, 5, 8, 1, 4].some(isBiggerThan10)); // false
console.log([2, 5, 8, 1, 40].some(isBiggerThan10)); // true
console.log(
  [2, 5, 8, 1, 4].some(v => {
    return v > 5;
  })
);
