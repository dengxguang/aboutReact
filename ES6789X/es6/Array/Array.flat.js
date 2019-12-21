/**
 * arr.flat(depth)
 * @description - 会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
 * @param depth - 指定要提取嵌套数组的结构深度, 默认值为 1。
 * @return { array } - 一个包含将数组与子数组中所有元素的新数组。
 */
let arr1 = [1, 2, [3, 4]];
arr1.flat();
