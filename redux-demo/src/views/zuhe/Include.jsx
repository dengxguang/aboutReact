import React from "react";

// 包含关系
// 当父组件不知道子组件可能的内容是什么的时候,可以使用props.children
function Article(props) {
  return (
    <section>
      <aside>侧边栏</aside>
      <article>{props.children}</article>
    </section>
  );
}

function App() {
  return <Article>这是一篇文章</Article>;
}

export default App;
