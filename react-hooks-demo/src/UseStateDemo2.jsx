import React, { useState } from 'react';

// 使用hooks实现
const DemoOfHooks2 = props => {
  let [age] = useState(18); 
  let [sex] = useState('男');
  let [work] = useState('前端程序员');
  return (
    <div>
      <p>dxg: 今年{age}岁</p>
      <p>性别: {sex}</p>
      <p>工作: {work}</p>
    </div>
  )
}

export default DemoOfHooks2;