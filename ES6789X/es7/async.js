// async 是让方法变成异步
//await 是等待异步方法执行完成,可以获取异步方法里面的数据，但是必须得用在异步方法里面

// 普通函数
/**
 function getData() {
   return "this is a data!";
 }
 console.log(getData()); // this is a data!
 * 
 */

//async 是让方法变成异步
/**
 * 
async function getData() {
  return "this is a data!";
}
console.log(getData());  // Promise { 'this is a data!' }
*
*/

// 获取async 异步方法里的数据，方法一
/**
 * 
 * async function getData() {
      return "this is a data";
    }
    let p = getData();
    p.then(data => {
      console.log(data); //this is a data
    });
 */

//await 是等待异步方法执行完成,可以获取异步方法里面的数据，但是必须得用在异步方法里面

/*await 错误的用法
 async function getData(){

    return '这是一个数据';
 }

 var d=await getData();
 console.log(d);  //await is only valid in async function

* */

// 获取async 异步方法里的数据，方法二  await
/**
async function getData() {
  return "this is a data";
}

async function test() {
  let d = await getData();
  console.log(d);
}
test(); // this is a data
 * 
 */

// await 阻塞功能，把异步改成一个同步
/**
 
  async function getData() {
  console.log(2);
  return "this is a data";
}

async function test() {
  console.log(1);
  let d = await getData();
  console.log(d);
  console.log(3);
}
test(); // 1,2,3
 */

/**
  //async 定义的方法返回的是 Promise对象。 
  function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let username = "zhangsan";
      resolve(username);
    }, 1000);
  });
}

var p = getData();
p.then(data => {
  console.log(data); // 张三
});
 */

function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let username = "lisi";
      resolve(username);
    }, 1000);
  });
}
async function test() {
  let d = await getData();
  console.log(d);
}
test();
