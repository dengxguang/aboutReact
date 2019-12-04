import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom"

// 用useEffect实现生命周期componentWillUnmount
function Index() {
  useEffect(()=>{
    console.log('useEffect=>老弟，你来了！index页面');
    return () => {
      console.log('老弟，你离开了Index页面');
    }
  },[]) 
  return <h2>DXG.cn.com</h2>
}

function List() {
  useEffect(()=>{
    console.log('useEffect=>老弟，你来了！list页面');
    return () => {
      console.log('老弟，你离开了List页面');
    }
  },[])
  return <h2>List-dxg</h2>
}

const DemoOfHooks4 = props => {
  let [count, setCount] = useState(0); 
  useEffect(()=>{
    console.log(`useEffect=> you clicked ${count} times`);
    return ()=>{
      console.log('=======================')
    }
  },[count]) // 关键代码 -- 如果需要每次都打印出来，需要给第二个参数添加上状态变量count

  return (
    <div>
      <p>you clicked {count} times</p>
      <button onClick={()=>{setCount(count+1)}}>click me</button>

      <Router>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/list/">列表</Link></li>
        </ul>

        <Route path="/" exact component={Index}></Route>
        <Route path="/list/" component={List}></Route>
      </Router>
    </div>
  )
}

export default DemoOfHooks4;