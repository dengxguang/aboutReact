// let union: number | string;
// union = 7;
// union = "seven";

// function getLength(something: string | number): string {
//   return something.toString();
// }

let union: string | number;
union = "seven";
console.log(union.length);
union = 7;
// console.log(union.length); // 编译时报错
