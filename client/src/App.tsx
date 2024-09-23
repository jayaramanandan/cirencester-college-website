import type { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";

import styles from "./App.module.css";
import Home from "./routes/Home";
import Login from "./routes/Login";

const App: Component = () => {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  );
};

export default App;
