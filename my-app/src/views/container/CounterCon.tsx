import * as React from 'react';
import { connect } from "react-redux";
import { Dispatch } from "redux";

import {decrement, increment} from '../../store/actions';
import {StoreState} from "../../types";
// import Counter from "../views/counter/index";

// 将 reducer 中的状态插入到组件的 props 中
// 下面是单个 reducer 的时候，多个的时候需要选传那个reducer
//  const {test, count} = state

const mapStateToProps = (state: StoreState):{value: number} => ({
  value: state
})

// 创建类型接口
export interface Props {
  value: number,
  onIncrement: () => void,
  onDecrement: () => void
}

// 使用接口代替 propTypes 进行类型校验
class Counter extends React.PureComponent<Props> {

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

// 将 对象 actoin 插入到组件的 props 中
const mapDispatchToPorps = (dispatch: Dispatch) => ({
  onDecrement: () => dispatch(decrement()),
  onIncrement: () => dispatch(increment())
})

// 使用 connect 高阶组件对 Counter 进行包裹
export default connect(mapStateToProps, mapDispatchToPorps)(Counter);