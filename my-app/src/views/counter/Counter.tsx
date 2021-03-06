import * as React from "react";

// 创建类型接口
export interface Iprops {
  value: number
}

// 使用接口代替 PropTypes 进行类型校验

const Counter = ({value}: Iprops) => {
  return <p>Clicked: {value} times</p>
}

export default Counter;