import React, { useState } from "react";
import styled from "styled-components";
import Heading from "../../../components/UI/Headings/Heading";
import DeleteContact from "../DeleteContact/DeleteContact";
import InputContact from "../InputContact/InputContact";

const Wrapper = styled.div`
  width: 100%;
  position: relative;
  padding: 4rem 3rem;
  background-color: var(--color-mainLighter);
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  margin-bottom: 3.5rem;
  border-radius: 0.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  text-align: center;
  color: var(--color-white);
`;

const Controls = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  padding: 1rem;
  justify-content: center;
`;

const editStyles = {
  color: "var(--color-main)",
  margin: "0 .5rem",
  cursor: "pointer",
};

const deleteStyles = {
  color: "var(--color-errorRed)",
  margin: "0 .5rem",
  cursor: "pointer",
};

const Contact = ({ contact }) => {
  const [isDeleting, setisDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <Wrapper>
      <Heading size="h3">
        {contact.firstName} {contact.lastName}
      </Heading>
      <Heading size="h4">{contact.title}</Heading>
      <Heading size="h3">{contact.company}</Heading>
      <Heading size="h4">{contact.website}</Heading>
      <Heading size="h4">{contact.email}</Heading>
      <Heading size="h4">{contact.officePhone}</Heading>
      <Heading size="h4">{contact.cellPhone}</Heading>
      <Heading size="h4">{contact.fax}</Heading>
      <Heading size="h4">{contact.streetAddress1}</Heading>
      <Heading size="h4">{contact.streetAddress2}</Heading>
      <Heading size="h4">
        {contact.city}, {contact.state} {contact.zip}
      </Heading>

      <Controls>
        <i
          className="fas fa-edit"
          style={editStyles}
          onClick={() => setIsEditing(true)}
        />
        <i
          className="fas fa-trash-alt"
          style={deleteStyles}
          onClick={() => setisDeleting(true)}
        />
        <DeleteContact
          contact={contact}
          show={isDeleting}
          close={() => setisDeleting(false)}
        />
        <InputContact
          editContact={contact}
          opened={isEditing}
          close={() => setIsEditing(false)}
        />
      </Controls>
    </Wrapper>
  );
};

export default Contact;
