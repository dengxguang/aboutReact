import React, { useState, useEffect } from 'react';

// 使用hooks实现
const DemoOfHooks3 = props => {
  let [count, setCount] = useState(0); 
  // ----- 关键代码 ----- start -----
  useEffect(()=>{
    console.log(`useEffect=> you clicked ${count} times`);
  })

  // ----- 关键代码 ----- end -----
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>
    </div>
  )
}

export default DemoOfHooks3;