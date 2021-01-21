import React from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import PanelButton from "../../../components/UI/Forms/Button/PanelButton";
import Heading from "../../../components/UI/Headings/Heading";
import Modal from "../../../components/UI/Modal/Modal";
import {
  Input,
  FieldRow,
  FieldLabel,
} from "../../../components/UI/Forms/Input/Input";
import Message from "../../../components/UI/Message/Message";
import { StyledForm } from "../../../hoc/layout/elements";

import * as actions from "../../../store/actions";

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  width: 100%;
  margin-bottom: 2rem;
  /* justify-content: space-around; */
`;

const MessageWrapper = styled.div`
  position: absolute;
  bottom: 0rem;
  width: 100%;
  padding: 0 3rem;
`;

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("first name is required.")
    .min(3, "too short.")
    .max(25, "too long."),
  lastName: Yup.string()
    .required("last name is required.")
    .min(3, "too short.")
    .max(25, "too long."),
  email: Yup.string().email("invalid email.").required("email is required."),
  streetAddress1: Yup.string().min(3, "too short.").max(25, "too long."),
  streetAddress2: Yup.string().min(3, "too short.").max(25, "too long."),
  city: Yup.string().min(3, "too short.").max(25, "too long."),
  state: Yup.string().min(2, "too short.").max(2, "too long."),
  zip: Yup.string().min(3, "too short.").max(25, "too long."),
  officePhone: Yup.string()
    .matches(phoneRegExp, "phone number is not valid")
    .min(10, "too short")
    .max(10, "too long"),
  cellPhone: Yup.string()
    .matches(phoneRegExp, "phone number is not valid")
    .min(10, "too short")
    .max(10, "too long"),
  fax: Yup.string()
    .matches(phoneRegExp, "fax number is not valid")
    .min(10, "too short")
    .max(10, "too long"),
  company: Yup.string().min(3, "too short.").max(25, "too long."),
  title: Yup.string().min(3, "too short.").max(25, "too long."),
  website: Yup.string().min(3, "too short").max(100, "too long"),
  backofCard: Yup.string().min(2, "too short").max(100, "too long"),
});

const InputContact = ({
  editContact,
  close,
  opened,
  addContact,
  loading,
  error,
  editContactAction,
}) => {
  const loadingText = editContact ? "Editing..." : "Adding...";

  return (
    <>
      <Modal opened={opened} close={close}>
        <Heading noMargin size="h1">
          {editContact ? "edit contact" : "add a new contact"}
        </Heading>
        <Heading bold size="h4">
          {editContact
            ? "edit your contact and click save"
            : "add a new contact and click add"}
        </Heading>
        <Formik
          initialValues={{
            firstName: editContact ? editContact.firstName : "",
            lastName: editContact ? editContact.lastName : "",
            email: editContact ? editContact.email : "",
            streetAddress1: editContact ? editContact.streetAddress1 : "",
            streetAddress2: editContact ? editContact.streetAddress2 : "",
            city: editContact ? editContact.city : "",
            state: editContact ? editContact.state : "",
            zip: editContact ? editContact.zip : "",
            officePhone: editContact ? editContact.officePhone : "",
            cellPhone: editContact ? editContact.cellPhone : "",
            fax: editContact ? editContact.fax : "",
            company: editContact ? editContact.company : "",
            title: editContact ? editContact.title : "",
            website: editContact ? editContact.website : "",
            backofCard: editContact ? editContact.backofCard : "",
          }}
          validationSchema={ContactSchema}
          onSubmit={async (values, { setSubmitting, resetForm }) => {
            // send contact
            const res = editContact
              ? await editContactAction(editContact.id, values)
              : await addContact(values);
            if (res) {
              close();
            }
            setSubmitting(false);
            resetForm();
          }}
        >
          {({ isSubmitting, isValid, resetForm }) => (
            <StyledForm>
              <FieldRow>
                <FieldLabel>first name</FieldLabel>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="first name..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>last name</FieldLabel>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="last name..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>email</FieldLabel>
                <Field
                  type="email"
                  name="email"
                  placeholder="email..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>street address</FieldLabel>
                <Field
                  type="text"
                  name="streetAddress1"
                  placeholder="street address line 1..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>street address</FieldLabel>
                <Field
                  type="text"
                  name="streetAddress2"
                  placeholder="street address line 2..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>city</FieldLabel>
                <Field
                  type="text"
                  name="city"
                  placeholder="city..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>state</FieldLabel>
                <Field
                  type="text"
                  name="state"
                  placeholder="state..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>zip</FieldLabel>
                <Field
                  type="text"
                  name="zip"
                  placeholder="zip..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>office #</FieldLabel>
                <Field
                  type="text"
                  name="officePhone"
                  placeholder="office #..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>cell #</FieldLabel>
                <Field
                  type="text"
                  name="cellPhone"
                  placeholder="cell #..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>fax #</FieldLabel>
                <Field
                  type="text"
                  name="fax"
                  placeholder="fax #..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>company</FieldLabel>
                <Field
                  type="text"
                  name="company"
                  placeholder="company name..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>title</FieldLabel>
                <Field
                  type="text"
                  name="title"
                  placeholder="title..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>website</FieldLabel>
                <Field
                  type="text"
                  name="website"
                  placeholder="website..."
                  component={Input}
                />
              </FieldRow>
              <FieldRow>
                <FieldLabel>backofCard</FieldLabel>
                <Field
                  type="text"
                  name="backofCard"
                  placeholder="your notes on the back of card..."
                  component={Input}
                />
              </FieldRow>
              <ButtonsWrapper>
                <PanelButton
                  contain
                  color="main"
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  loading={loading ? loadingText : null}
                >
                  {editContact ? "update contact" : "add contact"}
                </PanelButton>
              </ButtonsWrapper>
              <MessageWrapper>
                <Message error show={error}>
                  {error}
                </Message>
              </MessageWrapper>
            </StyledForm>
          )}
        </Formik>
      </Modal>
    </>
  );
};

// get states (contacts) from the store, and pass to this current component as prop
const mapStateToProps = ({ contacts }) => ({
  loading: contacts.loading,
  error: contacts.error,
});

const mapDispatchToProps = {
  addContact: actions.addContact,
  editContactAction: actions.editContact,
};

export default connect(mapStateToProps, mapDispatchToProps)(InputContact);
