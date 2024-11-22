import { Component, JSXElement } from "solid-js";

import { Card } from "../../../ui/card";

const NavbarContainer: Component<{ children: JSXElement }> = (props) => {
  return (
    <Card class="sticky top-0 left-0 rounded-t-none w-full min-h-15 max-h-15 flex flex-row">
      {props.children}
    </Card>
  );
};

export default NavbarContainer;
