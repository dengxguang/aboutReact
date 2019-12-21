// 1. 数组延展, 合并数组(构造数组)
let students = ["Jine", "Tom"];
let persons = ["Tony", ...students, "Aaron", "Anna"];
console.log(persons); // [ 'Tony', 'Jine', 'Tom', 'Aaron', 'Anna' ]

// 2. 在函数中使用
let numbers = [1, 2, 3];
function sum(x, y, z) {
  return x + y + z;
}
// 不使用延展操作符
console.log(sum.apply(null, numbers)); // 6

// 使用延展操作符
console.log(sum(...numbers)); // 6

// 3. 数组拷贝
let arr = [1, 2, 3, 4];
let arr2 = [...arr];
arr2.push(5);
console.log(arr2); // [ 1, 2, 3, 4, 5 ]

// 4. 连接多个数组
let arr3 = [0, 1, 2];
let arr4 = [3, 4, 5];
let arr5 = [...arr3, ...arr4];  // 将 arr2 中所有元素附加到 arr1 后面并返回
