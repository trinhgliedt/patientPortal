import React, { useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import styled from "styled-components";
import { firestoreConnect } from "react-redux-firebase";

import Heading from "../../components/UI/Headings/Heading";
import { Container } from "../../hoc/layout/elements";
import InputContact from "./InputContact/InputContact";
import Button from "../../components/UI/Forms/Button/Button";
import Loader from "../../components/UI/Loader/Loader";
import Contact from "./SingleContact/SingleContact";

const Wrapper = styled.div`
  width: 50%;
  align-self: flex-start;
  height: 100%;
  min-height: calc(100vh - 6rem);
  background-color: var(--color-mainLight);
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 4rem;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 60rem;
  flex-direction: column;
  margin-top: 2rem;
`;

const Contacts = ({ contacts, requested, userId }) => {
  const [isAdding, setIsAdding] = useState(false);
  let content;
  if (!contacts) {
    content = (
      <Content>
        <Loader isWhite />
      </Content>
    );
  } else if (!contacts[userId] || !contacts[userId].contacts) {
    content = (
      <Content>
        <Heading size="h2">you have no contacts!</Heading>
      </Content>
    );
  } else if (contacts[userId].contacts.length === 0) {
    content = (
      <Content>
        <Heading size="h2">you have no contacts!</Heading>
      </Content>
    );
  } else {
    content = (
      <Content>
        {contacts[userId].contacts
          .slice(0)
          .reverse()
          .map((contact) => (
            <Contact key={contact.id} contact={contact} />
          ))}
      </Content>
    );
  }

  return (
    <Wrapper>
      <Container>
        <InnerWrapper>
          <Heading noMargin size="h1">
            your contacts
          </Heading>
          <Heading bold size="h4">
            these are all of your contacts...
          </Heading>
          <Button color="main" contain onClick={() => setIsAdding(true)}>
            add contact
          </Button>
          <InputContact opened={isAdding} close={() => setIsAdding(false)} />
          {content}
        </InnerWrapper>
      </Container>
    </Wrapper>
  );
};

const mapStateToProps = ({ firebase, firestore }) => ({
  userId: firebase.auth.uid,
  contacts: firestore.data.contacts,
  requesting: firestore.status.requesting,
  requested: firestore.status.requested,
});

const mapDispatchToProps = {};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect((props) => [`contacts/${props.userId}`])
)(Contacts);
