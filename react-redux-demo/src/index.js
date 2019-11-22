/** redex */
// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './reduxDemo.jsx';

// ReactDOM.render(<App />, document.getElementById('root'));

/** react-redux */
import React from "react";
import ReactDOM from "react-dom";
import store from "./store/redux.js";
import Demo from "./reactReduxDemo.jsx";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Demo />
  </Provider>,
  document.getElementById("root")
);
