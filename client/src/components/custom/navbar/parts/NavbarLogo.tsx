import { Component } from "solid-js";

const NavbarLogo: Component<{ logo: string }> = (props) => {
  return (
    <img src={props.logo} alt="logo" class="mx-5 size-10 self-center"></img>
  );
};

export default NavbarLogo;
