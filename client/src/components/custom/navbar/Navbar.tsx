import { Component } from "solid-js";

import logo from "../../../assets/favicon.ico";

import NavbarLogo from "./parts/NavbarLogo";
import NavbarContainer from "./parts/NavbarContainer";
import NavbarLeft from "./parts/NavbarLeft";
import NavbarRight from "./parts/NavbarRight";
import NavbarLink from "./parts/NavbarLink";

const Navbar: Component<{ type: "horizontal" | "vertical" }> = (props) => {
  return (
    <NavbarContainer>
      <NavbarLogo logo={logo}></NavbarLogo>

      <NavbarLeft>
        <NavbarLink link="/">Home</NavbarLink>
        <NavbarLink link="/courses">Courses</NavbarLink>
        <NavbarLink link="/about">About</NavbarLink>
      </NavbarLeft>

      <NavbarRight>
        <NavbarLink link="/courses">Courses</NavbarLink>
        <NavbarLink link="/about">About</NavbarLink>
        <NavbarLink link="/login">Login</NavbarLink>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
// fix self-end
