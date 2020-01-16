import * as React from 'react';

export interface Props {
  value: number
}

// 使用接口代替 PropTypes 进行类型校验
export default class Counter extends React.PureComponent<Props> {
  public render(){
    return <p>Clicked: {this.props.value} times</p>
  }
}