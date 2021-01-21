import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import Modal from "../../../components/UI/Modal/Modal";
import Button from "../../../components/UI/Forms/Button/Button";
import Heading from "../../../components/UI/Headings/Heading";
import Message from "../../../components/UI/Message/Message";
import * as actions from "../../../store/actions";

const ButtonsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 2rem;
  justify-content: space-around;
`;

const ContactWrapper = styled.div`
  margin: 1rem 0rem;
  font-size: 1.3rem;
  text-align: center;
  /* color: var(--color-white); */
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 2rem;
  width: 100%;
  padding: 0 3rem;
`;

const DeleteContact = ({
  show,
  close,
  contact,
  deleteContact,
  error,
  loading,
}) => {
  return (
    <Modal opened={show} close={close}>
      <Heading noMargin size="h1">
        Deleting contact
      </Heading>
      <Heading bold size="h4">
        Are you sure you want to delete this contact?
      </Heading>
      <ContactWrapper>{contact.contact}</ContactWrapper>
      <ButtonsWrapper>
        <Button
          contain
          color="red"
          onClick={async () => await deleteContact(contact.id)}
          disabled={loading}
          loading={loading ? "Deleting..." : null}
        >
          Delete
        </Button>
        <Button color="main" contain onClick={close}>
          Cancel
        </Button>
      </ButtonsWrapper>
      <MessageWrapper>
        <Message error show={error}>
          {error}
        </Message>
      </MessageWrapper>
    </Modal>
  );
};

const mapStateToProps = ({ contacts }) => ({
  error: contacts.deleteContact.error,
  loading: contacts.deleteContact.loading,
});

const mapDispatchToProps = {
  deleteContact: actions.deleteContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(DeleteContact);
