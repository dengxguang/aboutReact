// // // 策略对象
// var strategys = {
//   isNotEmpty: function(value, errorMsg) {
//     if (value === "") {
//       return errorMsg;
//     }
//   },
//   // 限制最小长度
//   minLength: function(value, length, errorMsg) {
//     if (value.length < length) {
//       return errorMsg;
//     }
//   },
//   // 手机号码格式
//   mobileFormat: function(value, errorMsg) {
//     if (!/(^1[3|5|8][0-9]{9}$)/.test(value)) {
//       return errorMsg;
//     }
//   }
// };
// var Validator = function() {
//   this.cache = []; // 保存效验规则
// };
// Validator.prototype.add = function(dom, rules) {
//   var self = this;
//   for (var i = 0, rule; (rule = rules[i++]); ) {
//     (function(rule) {
//       var strategyAry = rule.strategy.split(":");
//       var errorMsg = rule.errorMsg;
//       self.cache.push(function() {
//         var strategy = strategyAry.shift();
//         strategyAry.unshift(dom.value);
//         strategyAry.push(errorMsg);
//         return strategys[strategy].apply(dom, strategyAry);
//       });
//     })(rule);
//   }
// };
// Validator.prototype.start = function() {
//   for (var i = 0, validatorFunc; (validatorFunc = this.cache[i++]); ) {
//     var msg = validatorFunc(); // 开始效验 并取得效验后的返回信息
//     if (msg) {
//       return msg;
//     }
//   }
// };
// // 代码调用
// var registerForm = document.getElementById("registerForm");
// var validateFunc = function() {
//   var validator = new Validator(); // 创建一个Validator对象
//   /* 添加一些效验规则 */
//   validator.add(registerForm.userName, [{ strategy: "isNotEmpty", errorMsg: "用户名不能为空" }, { strategy: "minLength:6", errorMsg: "用户名长度不能小于6位" }]);
//   validator.add(registerForm.password, [{ strategy: "minLength:6", errorMsg: "密码长度不能小于6位" }]);
//   validator.add(registerForm.phoneNumber, [{ strategy: "mobileFormat", errorMsg: "手机号格式不正确" }]);
//   var errorMsg = validator.start(); // 获得效验结果
//   return errorMsg; // 返回效验结果
// };
// // 点击确定提交
// registerForm.onsubmit = function() {
//   var errorMsg = validateFunc();
//   if (errorMsg) {
//     alert(errorMsg);
//     return false;
//   }
// };
// const isNullObj = object => (Object.keys(object).length === 0 ? true : false);
// const isHasProp = (object, propName) => (propName in object ? true : false);

// const isInArray = (arr, item) => (arr.includes(item) ? true : false);

// console.log(isInArray([{ a: 1 }, { a: 2 }, { a: 3 }], { a: 1 }));

// console.log(["3", "2", "1"].map(parseInt));
// console.log(["1", "2", "3"].map(parseInt));
// console.log({ ...{ a: 1, b: 2 }, ...{ c: 3, d: 4 } });

// const responseList = [{ id: 1, a: 1 }, { id: 2, a: 2 }, { id: 3, a: 3 }, { id: 1, a: 4 }];
// const result = responseList.reduce((acc, cur) => {
//   const ids = acc.map(item => item.id);
//   return ids.includes(cur.id) ? acc : [...acc, cur];
// }, []);

// // Object.assign  -- 浅拷贝
// let obj1 = {
//   a: { c: 2 },
//   b: 234
// };

// // let obj2 = Object.assign({}, obj1);
// let obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.a.c = 3;

// console.log(obj1, obj2);

// setTimeout(function aaa() {
//   console.log(this); // window
// });

// const diff = (obj1, obj2) => {
//   var o1 = obj1 instanceof Object;
//   var o2 = obj2 instanceof Object;
//   // 判断是不是对象
//   if (!o1 || !o2) {
//     return obj1 === obj2;
//   }

//   //Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,
//   //例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
//   if (Object.keys(obj1).length !== Object.keys(obj2).length) {
//     return false;
//   }

//   for (var o in obj1) {
//     var t1 = obj1[o] instanceof Object;
//     var t2 = obj2[o] instanceof Object;
//     if (t1 && t2) {
//       return diff(obj1[o], obj2[o]);
//     } else if (obj1[o] !== obj2[o]) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(diff({ a: 1, b: 2 }, { a: 1, b: [1, 2, 3] }));


// let arr = [1,'1',2,'2',1,2,'x','y','f','x','y','f'];
// console.log([...new Set(arr)]);
// console.log(Array.from(new Set(arr)));

items = [
  ['name', '张三'],
  ['age', 12]
]

const map = new Map(items);

console.log(map.get('name'))