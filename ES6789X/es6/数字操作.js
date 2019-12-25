// 二进制和八进制
// 二进制的英文单词是Binary,二进制的开始是0（零），然后第二个位置是b（注意这里大小写都可以实现），然后跟上二进制的值就可以了。
console.log('==========二进制和八进制 start =========');
let binary = 0B010101;
console.log(`二进制数：${binary}`);  // 21

// 八进制的英文单词是Octal，也是以0（零）开始的，然后第二个位置是O（欧），然后跟上八进制的值就可以了。
let octal = 0o666;
console.log(`八进制数：${octal}`);  // 438
console.log('==========二进制和八进制 end =========');



// 数字判断和转换
/**
* 可以使用Number.isFinite()来进行数字验证，
* 只要是数字，不论是浮点型还是整形都会返回true，
* 其他时候会返回false。
**/
console.log('==========数字判断和转换 start =========');
let a = 11/4;
console.log(Number.isFinite(a));  // true
console.log(Number.isFinite('jspang'));  // false
console.log(Number.isFinite(NaN));  // false
console.log(Number.isFinite(undefined));  // false
console.log('==========数字判断和转换 end =========');



// NaN验证
console.log('==========NaN验证 start =========');
// NaN是特殊的非数字，可以使用Number.isNaN()来进行验证。下边的代码控制台返回了true。
console.log(Number.isNaN(NaN)); // true
console.log('==========NaN验证 end =========');



// ========================判断是否为整数 Number.isInteger(xx)=======================
console.log('==========判断是否为整数 start =========');
let b = 123.1;
console.log(Number.isInteger(b))
console.log('==========判断是否为整数 end =========');



// ======================= 整数转换和浮点数转换 =======================
console.log('==========整数转换和浮点数转换 start =========');
let c='9.18';
console.log(`整数转换：${Number.parseInt(c)}`);
console.log(`浮点数转换：${Number.parseFloat(c)}`);
console.log('==========整数转换和浮点数转换 end =========');



// ================ 最大安全整数 ===============
console.log('==========最大安全整数 start =========');
console.log(`最大安全整数: ${Number.MAX_SAFE_INTEGER}`);
console.log('==========最大安全整数 end =========');



// ================ 最小安全整数 ===============
console.log('==========最小安全整数 start =========');
console.log(`最大安全整数: ${Number.MIN_SAFE_INTEGER}`);
console.log('==========最小安全整数 end =========');



// ================ 安全整数判断 ===============
console.log('==========安全整数判断 start =========');
console.log(`最大安全整数: ${Number.isSafeInteger(Math.pow(2,53)-1)}`);
console.log('==========安全整数判断 end =========');