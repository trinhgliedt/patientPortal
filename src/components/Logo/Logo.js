import React from "react";
import styled from "styled-components";
import logo from "./logo.png";

const LogoWrapper = styled.div`
  color: var(--color-white);
  width: 15rem;
  display: flex;
  align-items: center;
  padding: 1rem 1.7rem 0.7rem 1.7rem;
`;

const Logo = () => {
  return (
    <LogoWrapper>
      <img src={logo} width="100%" alt="logo" />
    </LogoWrapper>
  );
};

export default Logo;
