import type { Component } from "solid-js";
import { Router } from "@solidjs/router";

import { ColorModeProvider } from "@kobalte/core";

import Navbar from "./components/custom/navbar/Navbar";
import AppRoutes from "./app-routes/AppRoutes";

const App: Component = () => {
  return (
    <ColorModeProvider initialColorMode="dark">
      <Router
        root={(props) => {
          return (
            <>
              <Navbar type="horizontal"></Navbar>
              {props.children}
            </>
          );
        }}
      >
        <AppRoutes></AppRoutes>
      </Router>
    </ColorModeProvider>
  );
};

export default App;
