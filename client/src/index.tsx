/* @refresh reload */
import { render } from "solid-js/web";
import { Router, Route } from "@solidjs/router";

import "./index.css";
import App from "./App";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/NotFound";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(() => {
  return (
    <Router root={App}>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/Signup" component={Signup} />
      <Route path="*" component={NotFound} />
    </Router>
  );
}, root!);
