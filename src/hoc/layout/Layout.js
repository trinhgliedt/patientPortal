import React, { Suspense } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// import Contacts from "../../containers/Contacts/Contacts";
import Navbar from "../../components/Navigation/Navbar/Navbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import "../../utils/theme.css";
const Contacts = React.lazy(() => import("../../containers/Contacts/Contacts"));

const AppWrapper = styled.main`
  /* width: 100%; */
  max-width: 88rem;
  display: flex;
  flex-direction: column;
  padding: 0 0 1rem 0;
  align-items: flex-start;
  background-color: var(--color-main);
  border-radius: 0.2rem;
  margin: 1rem;
  @media ${(props) => props.theme.mediaQueries.small} {
    margin: 0;
    padding-top: 6rem;
  }

  @media ${(props) => props.theme.mediaQueries.smallest} {
    margin: 0;
    padding-top: 6rem;
  }
`;

const ContentWrapper = styled.main`
  width: 100%;
  /* max-width: 800px; */
  /* min-height: calc(100vh - 6rem); */
  margin: 0rem;
  display: flex;
  /* padding: 4rem 0; */
  align-items: flex-start;
`;

const Layout = ({ children, loggedIn }) => (
  <AppWrapper>
    <Navbar loggedIn={loggedIn} />
    <SideDrawer loggedIn={loggedIn} />
    <ContentWrapper>
      {children}
      {/* <div style={{ width: "500px", height: "500px", margin: "30px" }}></div> */}
      <Suspense fallback={<div>Loading...</div>}>
        <Contacts></Contacts>
      </Suspense>
    </ContentWrapper>
  </AppWrapper>
);

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth,
});

export default connect(mapStateToProps)(Layout);
