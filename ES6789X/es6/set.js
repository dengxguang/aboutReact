// 普通数组去重
let arr = [1, 2, 3, 3, 4, 4, 5, 5, 6];
console.log([...new Set(arr)]);

// 字符串去重
console.log([...new Set("abcaabbcc")].join(""));
