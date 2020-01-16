import * as React from 'react';
// 创建类型接口
export interface Props {
  value: number,
  onIncrement: () => void,
  onDecrement: () => void
}

// // 使用接口代替 propTypes 进行类型校验
export default class Counter extends React.PureComponent<Props> {

  public render() {
    const {value, onIncrement, onDecrement} = this.props;
    return (
      <p>
        <p>Clicked: {value} time</p>
        <button onClick={onIncrement} style={{marginRight: 20}}>+</button>
        <button onClick={onDecrement}>-</button>
      </p>
    )
  }
}