import { Component, JSXElement } from "solid-js";

const NavbarLeft: Component<{ children: JSXElement }> = (props) => {
  return (
    <div class="w-1/3 h-full flex flex-row items-stretch">{props.children}</div>
  );
};

export default NavbarLeft;
