import React from "react";
import styled from "styled-components";
import "../../../utils/theme.css";
import Logo from "../../Logo/Logo";
import { Container } from "../../../hoc/layout/elements";
import NavItems from "../NavItems/NavItems";

const FixedWrapper = styled.header`
  width: 100%;
  /* position: fixed; */
  max-width: 88rem;
  z-index: 1;
  /* top: 0rem; */
  /* left: 0rem; */
  border-radius: 0.2rem;

  @media ${(props) => props.theme.mediaQueries.small} {
    display: none;
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    display: none;
  }
`;

const Wrapper = styled.div`
  max-width: 88rem;
  display: block;
  background-image: linear-gradient(
    var(--color-mainLight1),
    var(--color-mainDark),
    var(--color-mainDark)
  );
`;

const Navbar = ({ loggedIn }) => {
  return (
    <FixedWrapper>
      <Container>
        <Logo />
        <Wrapper>
          <NavItems loggedIn={loggedIn} />
        </Wrapper>
      </Container>
    </FixedWrapper>
  );
};

export default Navbar;
