// // 函数声明
// function sum(x, y) {
//   return x + y;
// }

// //函数表达式
// let mySum = function(x, y) {
//   return x + y;
// };

// 函数声明的约束
// function sum(x: number, y: number): number {
//   return x + y;
// }

// // 注意 输入多余（或者少于要求的）参数都是不被允许的
// sum(1);

//函数表达式的约束
// let mySum = function(x: number, y: number): number {
//   return x + y;
// };

// let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
//   return x + y;
// };

// 用接口定义函数的形状
// interface SearchFunc {
//   (source: string, subString: string): boolean;
// }
// let mySearch: SearchFunc;
// mySearch = function(source: string, subString: string) {
//   return source.search(subString) !== -1;
// };

// 可选参数
// error TS1016: A required parameter cannot follow an optional parameter.
// function buildName(firstName?: string, lastName: string) {
//   if (lastName) {
//     return firstName + " " + lastName;
//   } else {
//     return firstName;
//   }
// }

// let tomcat = buildName("Tom", "Cat");
// let tom2 = buildName(undefined, "Tom"); // 可选参数后面不能再有必需参数

// 默认参数
// function buildName(firstName: string, lastName: string = 'Cat') {
//   return firstName + " " + lastName;
// }
// let tomcat = buildName('Tom', 'Cat');
// let tomcat2 = buildName('Tom');

// function buildName(firstName: string = "Tom", lastName: string) {
//   return firstName + " " + lastName;
// }
// let tomcat = buildName("Tom", "Cat");
// let tomcat2 = buildName(undefined, "Cat");

// 剩余参数
// function push(array: any[], ...items: any[]) {
//   items.forEach(function(item) {
//     array.push(item);
//   });
// }
// let a = [];
// push(a, 1, 2, 3, 4);
// console.log(a);

// 重载
// function reverse(x: number | string): number | string {
//   if(typeof x === 'number') {
//     return Number(x.toString().split('').reverse().join(''));
//   } else if (typeof x === 'string') {
//     return x.split('').reverse().join('');
//   }
// }

// console.log(reverse(123))
// console.log(reverse('hello'))

// 使用重载定义多个reverse的函数类型
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === "number") {
    return Number(
      x
        .toString()
        .split("")
        .reverse()
        .join("")
    );
  } else if (typeof x === "string") {
    return x
      .split("")
      .reverse()
      .join("");
  }
}

console.log(reverse(123));
console.log(reverse("hello"));
