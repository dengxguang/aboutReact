
// ==================== Array.from =======================
// ES6的语法转变成数组
let json = {
  '0': 'abcd',
  '1': 'bcde',
  '2': 'cdef',
  length: 3
}

let arr1 = Array.from(json);
console.log(arr1);


// ======================== Array.of =====================
// 它负责把一堆文本或者变量转换成数组
let arr2 = Array.of(1,2,3,4,5,6);
console.log(arr2);

let arr3 = Array.of('技术胖','jspang','大胖逼逼叨');
console.log(arr3);


// ===================== find()实例方法 ======================
// 在函数中如果找到符合条件的数组元素就进行return，并停止查找
let arr4=[1,2,3,4,5,6,7,8,9];
console.log(arr4.find(function(value,index,arr){
  return value>5
}))   // 6


// ======================= fill()实例方法 ====================
// fill()也是一个实例方法，它的作用是把数组进行填充，
// 它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充结束的位置（这个位置不填充）。
let arr5 = [0,1,2,3,4,5,6,7,8,9];
arr5.fill('jspang', 2,5);
console.log(arr5);


// ===================== for...of循环 ===========================
let arr6 = ['jspang', '技术胖', '大胖哔哔叨'];
for(let item of arr6) {
  console.log(item);
}
// for...of 数组索引
for(let index of arr6.keys()) {
  console.log(index);
}
// for...of 同时输出数组内容和索引 使用“entries()”
for(let [index,val] of arr6.entries()) {
  console.log(`${index}: ${val}`);
}



// =========================== entries()实例方法 =========================
// entries()实例方式生成的是lterator形式的数组，那这种形式的好处就是可以让我们在需要时用next()手动跳转到下一个值。
let list = arr6.entries();
console.log('============ entries() ================');
console.log(list.next().value);
console.log(list.next().value);
console.log(list.next().value);


