/**
 * resolve  成功回调方法
 * reject 失败回调方法
 */

// 写法一
// let p = new Promise((resolve, reject) => {
//   let name = "张三";
//   if (Math.random() < 0.5) {
//     setTimeout(() => {
//       resolve(name);
//     }, 1000);
//   } else {
//     reject("失败");
//   }
// });

// p.then(data => {
//   console.log(data);
// }).catch(data => {
//   console.log(data);
// });

// 写法二
// function getName(resolve, reject) {
//   let name = "老四";
//   if (Math.random() < 0.5) {
//     setTimeout(() => {
//       resolve(name);
//     }, 1000);
//   } else {
//     reject("失败");
//   }
// }

// let p = new Promise(getName);
// p.then(data => {
//   console.log(data);
// }).catch(data => {
//   console.log(data);
// });

// new Promise((resolve, reject) => {
//   resolve(123);
// })
//   .then(res => {
//     // console.log(res);
//     // return 456;
//     new Error("this is error");
//   })
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     // console.log(err);
//   });

// 手写一个promise
function isFunction(fn) {
  return typeof fn === "function";
}
Function.prototype.bind = function(context) {
  let self = this;
  return function() {
    // 用call是在于明确知道参数的数量
    // 用apply是在不定的情况下
    self.apply(context, arguments);
  };
};
function myPromise(handle) {
  this.status = "PENDING";
  this.val = 4;
  this.resolveArr = [];
  this.rejectArr = [];
  this.resolve = value => {
    if (this.status !== "PENDING") return;
    this.status = "RESOLVE";
    this.val = value;
    let cb;
    setTimeout(() => {
      while ((cb = this.resolveArr.shift())) {
        if (isFunction(cb)) {
          cb(value);
        } else {
        }
      }
    });
  };
  this.reject = function() {
    if (this.status !== "PENDING") return;
    this.status = "RESOLVE";
    this.val = value;
  };
  try {
    handle(this.resolve.bind(this), this.reject.bind(this));
  } catch (err) {
    throw err;
  }
}

myPromise.prototype.then = function(suc, err) {
  let val = this.val;
  let status = this.status;
  return new myPromise((resolve, reject) => {
    let _fn = undefined;
    let _handle = undefined;
    let run = function() {
      try {
        if (!isFunction(suc)) {
          _fn(suc);
        } else {
          let res = _handle(val);
          resolve(res);
        }
      } catch (err) {
        reject(err);
      }
    };
    switch (status) {
      case "PENDING":
        this.resolveArr.push(suc);
        this.rejectArr.push(suc);
        break;
      case "RESOLVE":
        _fn = resolve;
        _handle = suc;
        run();
        break;
      case "REJECT":
        _fn = reject;
        _handle = err;
        run();
        break;
    }
  });
};

new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(4);
  }, 3000);
})
  .then("123231")
  .then(res => {
    console.log(res);
    return res + 123;
  })
  .then(res => {
    console.log(res);
  });
