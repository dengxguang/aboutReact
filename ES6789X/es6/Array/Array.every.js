/**
 * arr.every(callback[, thisArg])
 * @description - 测试数组的所有元素是否都通过了指定函数的测试。
 * @param callback - 用来测试每个元素的函数。
 * @param thisArg - 执行 callback 时使用的 this 值。
 * @return { Boolean } - 是否通过测试。
 */
console.log(
  [12, 5, 8, 120, 44].every(v => {
    return v >= 10;
  })
); // false

console.log(
  [12, 5, 8, 120, 44].every(v => {
    return v >= 5;
  })
); // true
