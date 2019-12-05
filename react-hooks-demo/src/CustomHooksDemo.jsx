import React, {useState, useEffect} from 'react';

function useWinSize() {
  const [size, setSize] = useState({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  })

  useEffect(()=>{
    const onResize = ()=>{
      setSize({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      })
    }
    window.addEventListener('resize', onResize);
    return ()=>{
      window.removeEventListener('resize', onResize);
    }
  }, [])

  return size;
}

function CustomHooksDemo(props) {
  const size = useWinSize();
  return (
    <div>
      <div>页面Size:{size.width}x{size.height}</div>
    </div>
  );
}

export default CustomHooksDemo;