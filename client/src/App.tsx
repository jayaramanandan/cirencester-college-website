import type { Component } from "solid-js";
import { Router, Route } from "@solidjs/router";

import { ColorModeProvider } from "@kobalte/core";

import Home from "./routes/Home";
import Login from "./routes/Login";
import Signup from "./routes/Signup";

const App: Component = () => {
  return (
    <ColorModeProvider initialColorMode="dark">
      <Router>
        <Route path={"/"} component={Home}></Route>
        <Route path={"/login"} component={Login}></Route>
        <Route path={"/signup"} component={Signup}></Route>
      </Router>
    </ColorModeProvider>
  );
};

export default App;
