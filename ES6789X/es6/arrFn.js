// 箭头函数的this指向实例
/**
 * demo 1
 */
// var a = 0;
// var obj = {
//   a: 1,
//   b1: obj.a, // this指向window
//   b2: () => this.a
// };
// console.log(obj.b1);  // 0
// console.log(obj.b2()); // 0

/**
 * demo2
 */
// let a = 0;
// (function fn() {
//   var a = 2;
//   console.log(this.a); // 0

//   const subf = () => this.a;
//   console.log(subf()); // 0
// })();

/**
 * demo3
 */
/**this指向obj */
// var obj2 =  {
//   a: 3,
//   b1: function(){ return this.a; },
//   b2: function(){ return ()=>this.a},
// };
// console.log(obj2.b1());  // 3
// console.log(obj2.b2()());  // 3

/**demo4 */
// var obj3 = {
//   a: 4,
//   b1: function() {
//     return this.a;
//   },
//   b2: function() {
//     return () => () => () => this.a;
//   }
// };
// console.log(obj4.b1()); // 4
// console.log(obj4.b2()()()()); // 4
/**demo5 */
// function f0() {
//   var a = 5;

//   setTimeout(function() {
//     var b1 = this.a;
//     console.log(b1); // 0
//   }, 100);

//   setTimeout(function() {
//     var b2 = () => this.a;
//     console.log(b2()); // 0
//   }, 200);
// }

// f0(); // 0  0

/**demo6 */
var a = 0;
function f0() {
  var a = 5;

  setTimeout(() => {
    var b1 = this.a;
    console.log(b1); // 0
  }, 100);

  setTimeout(() => {
    var b2 = () => this.a;
    console.log(b2()); // 0
  }, 200);
}
