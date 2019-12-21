/**
 * 将
 * const style2StatusMap = {
  success: [100],
  warning: [101,102],
  danger: [103,104]
}
转换成一下格式
 * const status2styleMap = {
  100: 'success',
  101: 'warning',
  102: 'warning',
  103: 'danger',
  104: 'danger'
}
 */
// 使用ES6的entries和reduce等API实现
const style2StatusMap = {
  success: [100],
  warning: [101, 102],
  danger: [103, 104]
};
// 实现toPairs函数取出Map的键值对，函数返回形如[[key1,val1]...]的数组
const toPairs = obj => Object.entries(obj);

// 实现heed、last函数取出列表头尾元素
const head = list => list[0];
const last = list => list.reverse()[0];

// 将对象转换为数组
const pairs = toPairs(style2StatusMap);

const status2styleMap = pairs.reduce((acc, curr) => {
  const style = head(curr);
  const status = last(curr);
  return status.reduce((accer, each) => ((accer[each] = style), accer), acc);
}, {});

console.log(status2styleMap);
