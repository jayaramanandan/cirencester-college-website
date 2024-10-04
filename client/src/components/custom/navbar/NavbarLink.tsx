import { Component, JSXElement } from "solid-js";

import { Button } from "../../ui/button";

const NavbarLink: Component<{ children: JSXElement }> = (props) => {
  return (
    <Button class="m-2 flex-grow flex-shrink" variant="ghost">
      {props.children}
    </Button>
  );
};

export default NavbarLink;
