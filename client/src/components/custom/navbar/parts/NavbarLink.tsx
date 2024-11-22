import { Component, JSXElement } from "solid-js";
import { A } from "@solidjs/router";

import { Button } from "../../../ui/button";

const NavbarLink: Component<{ children: JSXElement; link: string }> = (
  props
) => {
  return (
    <A href={props.link}>
      <Button class="m-2 flex-grow flex-shrink" variant="link">
        {props.children}
      </Button>
    </A>
  );
};

export default NavbarLink;
