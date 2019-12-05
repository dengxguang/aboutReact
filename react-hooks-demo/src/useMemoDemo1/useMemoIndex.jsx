import React, {useState, useMemo} from 'react';

const ChildComponent = ({name, children}) => { // 多个参数需要用对象来传
  const changeXiaohong = (name) => {
    console.log('她来了，她来了，小红向我们走来了');
    return name + '000小红向我们走来了'
  }

  const actionXiaohong = useMemo(()=>changeXiaohong(name), [name]);
  return (
    <>
      <div>{actionXiaohong}</div>
      <div>{children}</div>
    </>
  )
}
const useMemoIndex = () => {
  const [xiaohong, setXiaohong] = useState('小红待客状态');
  const [zhiling, setZhiling] = useState('志玲待客状态');
  return (
    <>
      <button onClick={()=>{setXiaohong(new Date().getTime())}}>小红</button>
      <button onClick={()=>{setZhiling(new Date().getTime()+',志玲向我们走来了')}}>志玲</button>
      <ChildComponent name={xiaohong}>{zhiling}</ChildComponent>
    </>
  );
};

export default useMemoIndex;