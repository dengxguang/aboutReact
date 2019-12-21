// 1. 获取数组中的值
// 从数组中获取值并赋值到变量中，变量的顺序与数组中对象顺序对应。
// var foo = ["one", "two", "three", "four"];
// var [one, two, three] = foo;
// console.log(one, two, three); // one two three

// 如果你要忽略某些值，你可以按照下面的写法获取你想要的值
// var [first, , , last] = foo;
// console.log(first, last); // one four

// 也可以先声明变量
// var a, b;
// [a, b] = [1, 2];
// console.log(a, b); // 1 2

// 2. 如果没有从数组中的获取到值，你可以为变量设置一个默认值。
// var c, d;
// [c = 6, d = 7] = [1];
// console.log(c, d); // 1, 7

// 3. 通过解构赋值可以方便的交换两个变量的值。
// var e = 11,
//   f = 22;
// [e, f] = [f, e];
// console.log(e, f);

// 4.获取对象中的值
// const student = {
//   name: "Ming",
//   age: "18",
//   city: "shanghai"
// };

// const { name, age, city } = student;
// console.log(name, age, city);

// 字符串结构
const hi = "hello";
let [a, b, c, d, e] = hi;
let { length } = hi;
console.log(a, b, c, d, e, length);
