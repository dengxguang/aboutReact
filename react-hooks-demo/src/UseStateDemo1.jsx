import React, { useState } from 'react';

// 使用hooks实现
const DemoOfHooks1 = props => {
  let [count, setCount] = useState(0); 
  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>add</button>
    </div>
  )
}

export default DemoOfHooks1;