import type { Component } from "solid-js";
import { lazy } from "solid-js";
import { Router, Route } from "@solidjs/router";

import { ColorModeProvider } from "@kobalte/core";

import Home from "./routes/Home";
import Navbar from "./components/custom/Navbar";
const Login: Component = lazy(() => import("./routes/Login"));
const Signup: Component = lazy(() => import("./routes/Signup"));

const App: Component = () => {
  return (
    <ColorModeProvider initialColorMode="dark">
      <Navbar type="horizontal"></Navbar>
      <Router>
        <Route path={"/"} component={Home}></Route>
        <Route path={"/login"} component={Login}></Route>
        <Route path={"/signup"} component={Signup}></Route>
      </Router>
    </ColorModeProvider>
  );
};

export default App;
