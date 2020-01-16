import * as React from 'react';
import './App.css';

import logo from "./logo.svg";
// import Counter from "./views/counter/Counter";
import Counter from "./views/container/CounterCon";

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Counter />
      </div>
    );
  }
}

export default App;
