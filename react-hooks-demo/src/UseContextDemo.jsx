import React, { useState, createContext, useContext } from 'react';

// useContext 的简单使用

//====关键代码====
const CountContext = createContext();

// 创建接收count的子组件
function Counter() {
  const count = useContext(CountContext);  // 一句话就可以得到count
  return (<h2>{count}</h2>)
  // return (<h2>{count[0]}</h2>)
}

const DemoOfHooks5 = props => {
  let [count, setCount] = useState(0); 
  let [age] = useState(20); 
  // const arr = [count,age]  //如果要穿多个值可以使用数组的方式
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>add</button>
      {/* ====关键代码==== */}
      {/*<CountContext.Provider value={arr}>*/}
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default DemoOfHooks5;