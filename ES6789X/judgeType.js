// 判断数据类型

// 方法一 typeof(基础类型) 结合 instanceof(object--array/object/null/function)
/*
const judgeType = (val) => {
  if(typeof val !== 'object') {
    return typeof val
  } else {
    if(val instanceof Array) {
      return 'Array'
    } else if(val instanceof Function){
      return 'function'
    }else if (val instanceof Object) {
      return "object"
    } else {
      return 'null'
    }
  }
}

console.log(judgeType(2));  // number
console.log(judgeType(true)); // boolean
console.log(judgeType('str')); // string
console.log(judgeType([])); // Array
console.log(judgeType(function(){})); // function
console.log(judgeType({})); // object
console.log(judgeType(undefined)); // undefined
console.log(judgeType(null)); // null

*/

// 方法二  Object.prototype.toString.call()

let toString = Object.prototype.toString;

console.log(toString.call(2)) // [object Number]
console.log(toString.call(true)) // [object Boolean]
console.log(toString.call('str')) // [object String]
console.log(toString.call([])) // [object Array]
console.log(toString.call(function(params) {})) // [object Function]
console.log(toString.call({})) // [object Object]
console.log(toString.call(undefined)) // [object Undefined]
console.log(toString.call(null)) // [object Null]