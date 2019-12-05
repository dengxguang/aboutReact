import React, {useRef} from 'react';

function useRefDemo1() {
  const inputEl = useRef(null);
  const divEl = useRef('div');
  const onButtonClick=()=>{
    inputEl.current.value = 'hello, useRef';
    console.log(inputEl) // 输出获取到的DOM节点
    divEl.current.style.color = 'red';
    divEl.current.innerHTML = '44444';
  }

  return (
    <>
      {/* 保存input的ref到inputEl */}
      <input ref={inputEl} type="text" />
      <div ref={divEl}>22222</div>
      <button onClick={onButtonClick}>在input上展示文字</button>
    </>
  );
}

export default useRefDemo1;