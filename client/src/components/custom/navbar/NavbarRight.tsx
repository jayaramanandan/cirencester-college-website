import { Component, JSXElement } from "solid-js";

const NavbarRight: Component<{ children: JSXElement }> = (props) => {
  return (
    <div class="w-1/3 h-full self-end flex flex-row items-stretch ml-auto">
      {props.children}
    </div>
  );
};

export default NavbarRight;
