import { Component } from "solid-js";

import logo from "../../assets/favicon.ico";

import NavbarLogo from "./navbar/NavbarLogo";
import NavbarContainer from "./navbar/NavbarContainer";
import NavbarLeft from "./navbar/NavbarLeft";
import NavbarRight from "./navbar/NavbarRight";
import NavbarLink from "./navbar/NavbarLink";

const Navbar: Component<{ type: "horizontal" | "vertical" }> = (props) => {
  return (
    <NavbarContainer>
      <NavbarLogo logo={logo}></NavbarLogo>

      <NavbarLeft>
        <NavbarLink>Home</NavbarLink>
        <NavbarLink>Courses</NavbarLink>
        <NavbarLink>About</NavbarLink>
      </NavbarLeft>

      <NavbarRight>
        <NavbarLink>Login</NavbarLink>
        <NavbarLink>Courses</NavbarLink>
        <NavbarLink>About</NavbarLink>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
// fix self-end
