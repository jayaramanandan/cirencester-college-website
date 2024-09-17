import { RouteSectionProps } from "@solidjs/router";
import type { Component } from "solid-js";

const App: Component<RouteSectionProps> = (props) => {
  return (
    <>
      <div>hello world</div>
      {props.children}
    </>
  );
};

export default App;
