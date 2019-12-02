import React from "react";
import { HashRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import loadable from "@/utils/loadable.js";
import "animate.css";
import "@/style/base.scss";
import "@/style/App.scss";

// 公共模块
const DefaultLayout = loadable(() => import("./containers"));

// 基础页面
const view404 = loadable(() => import("./views/Others/404"));
const view500 = loadable(() => import("./views/Others/500"));
const Login = loadable(() => import("./views/Login"));

const App = props => (
  <Router>
    <Switch>
      <Route path="/" exact render={() => <Redirect to="/index" />}></Route>
      <Route path="/500" component={view500}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/404" component={view404}></Route>
      <Route component={DefaultLayout}></Route>
    </Switch>
  </Router>
);

export default App;
