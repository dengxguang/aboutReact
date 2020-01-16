// // 「类型 + 方括号」表示法
// let fibonacci: number[] = [1, 2, 3, 4, 5];
// fibonacci.push("5"); // error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.
// 数组泛型
// let fibonacci: Array<number> = [1,2,4,3]
// 用接口描述数组
// interface numberArray {
//   [index: number]: string;
// }
// let fibonacci: numberArray = ["a", "b"];
// 类数组
// function sum() {
//   let args: {
//     [index: number]: number;
//     length: number;
//     callee: Function;
//   } = arguments;
// }
// ts自定定义好的接口
// function sum() {
//   let args: IArguments = arguments;
// }
// any 在数组中的应用
var fibonacci = [1, "xc", { website: "http://www.baidu.com" }];
