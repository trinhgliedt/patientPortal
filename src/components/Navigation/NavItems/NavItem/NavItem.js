import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import "../../../../utils/theme.css";

const Li = styled.li`
  display: flex;
  height: 100%;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  /* border-bottom: ${(props) =>
    props.mobile ? "1px solid transparent" : "2px solid transparent;"}; */
  font-size: 1.2rem;
  padding: ${(props) => (props.mobile ? ".5rem 1rem" : "0 2rem")};
  margin: ${(props) => (props.mobile ? "2rem 0" : "0 0rem")};
  font-weight: 600;
  font-size: 1.8rem;
  color: var(--color-white);
  transition: all 0.2s;

  &:hover {
    background-image: ${(props) =>
      props.mobile
        ? ""
        : "linear-gradient(var(--color-mainLight1),  var(--color-mainDarker));"};

    border-bottom: ${(props) =>
      props.mobile ? "1px solid var(--color-white)" : ""};
  }

  &.active {
    background-image: ${(props) =>
      props.mobile
        ? ""
        : "linear-gradient(var(--color-mainLight1),  var(--color-mainDarker));"};
    border-bottom: ${(props) =>
      props.mobile ? "1px solid var(--color-mainLight)" : ""};
`;

const NavItem = ({ link, children, mobile, clicked }) => {
  return (
    <Li>
      <StyledNavLink
        onClick={clicked}
        exact
        activeClassName="active"
        mobile={mobile ? 1 : 0}
        to={link}
      >
        {children}
      </StyledNavLink>
    </Li>
  );
};

export default NavItem;
