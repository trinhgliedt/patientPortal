import React from "react";
import styled from "styled-components";
import "../../../utils/theme.css";
import NavItem from "./NavItem/NavItem";

const Nav = styled.nav`
  display: flex;
  margin-top: ${(props) => (props.mobile ? "-6rem" : null)};
`;
const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.mobile ? "center" : "")};

  justify-content: ${(props) => (props.mobile ? "" : "space-between")};
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
`;

const NavLeft = styled.nav`
  /* margin-right: auto; */
`;
const NavRight = styled.nav`
  /* margin-left: auto; */
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: ${(props) => (props.mobile ? "column" : "row")};
  align-items: center;
  height: 100%;
`;
const Divider = styled.ul`
  height: 70%;
  border-right: ${(props) =>
    props.mobile ? "none" : "1px solid var(--color-mainDarker)"};
`;
const NavItems = ({ mobile, clicked, loggedIn }) => {
  let links;
  if (loggedIn.uid) {
    links = (
      <NavContainer mobile={mobile}>
        <NavLeft>
          <Ul mobile={mobile}>
            <NavItem mobile={mobile} clicked={clicked} link="/customize">
              customize
            </NavItem>
            <Divider mobile={mobile} />
            <NavItem mobile={mobile} clicked={clicked} link="/search">
              search
            </NavItem>
            <Divider mobile={mobile} />
            <NavItem mobile={mobile} clicked={clicked} link="/folders">
              folders
            </NavItem>
            <Divider mobile={mobile} />
            <NavItem
              mobile={mobile}
              clicked={clicked}
              link="/tracker"
              style={{ backgroundColor: "red" }}
            >
              tracker
            </NavItem>
          </Ul>
        </NavLeft>
        <NavRight>
          <Ul>
            <NavItem mobile={mobile} clicked={clicked} link="/logout">
              logout
            </NavItem>
          </Ul>
        </NavRight>
      </NavContainer>
    );
  } else {
    links = (
      <NavContainer mobile={mobile}>
        <NavLeft>
          <Ul mobile={mobile}>
            <NavItem mobile={mobile} clicked={clicked} link="/">
              customize
            </NavItem>
            <Divider mobile={mobile} />
            <NavItem mobile={mobile} clicked={clicked} link="/">
              search
            </NavItem>
            <Divider mobile={mobile} />
            <NavItem mobile={mobile} clicked={clicked} link="/">
              folders
            </NavItem>
            <Divider mobile={mobile} />
            <NavItem
              mobile={mobile}
              clicked={clicked}
              link="/"
              style={{ backgroundColor: "red" }}
            >
              tracker
            </NavItem>
          </Ul>
        </NavLeft>
        <NavRight>
          <Ul mobile={mobile}>
            <NavItem mobile={mobile} clicked={clicked} link="/login">
              login
            </NavItem>
            <Divider mobile={mobile} />
            <NavItem mobile={mobile} clicked={clicked} link="/signup">
              signup
            </NavItem>
          </Ul>
        </NavRight>
      </NavContainer>
    );
  }
  return <Nav mobile={mobile}>{links}</Nav>;
};

export default NavItems;
