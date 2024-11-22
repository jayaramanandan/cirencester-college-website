import { Route } from "@solidjs/router";
import { Component, lazy } from "solid-js";

import Home from "./routes/Home";
const Login: Component = lazy(() => import("./routes/Login"));
const Signup: Component = lazy(() => import("./routes/Signup"));

const AppRoutes: Component = () => {
  return (
    <>
      <Route path="/" component={Home}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/signup" component={Signup}></Route>
    </>
  );
};

export default AppRoutes;
