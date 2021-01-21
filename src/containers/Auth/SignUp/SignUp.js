import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import styled from "styled-components";

import { FormWrapper, StyledForm } from "../../../hoc/layout/elements";
import { Input } from "../../../components/UI/Forms/Input/Input";
import Button from "../../../components/UI/Forms/Button/Button";
import Heading from "../../../components/UI/Headings/Heading";
import Message from "../../../components/UI/Message/Message";
import {
  Paragraph,
  CustomLink2,
  LinksContainer,
} from "../../../components/UI/CustomLink/CustomLink";

import * as actions from "../../../store/actions";

const MessageWrapper = styled.div`
  position: absolute;
  bottom: -2rem;
`;

// const FormIkWrapper = styled(Formik)`
//   outline: 1px solid yellow;
// `;

const SignUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("Your first name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  lastName: Yup.string()
    .required("Your last name is required.")
    .min(3, "Too short.")
    .max(25, "Too long."),
  email: Yup.string()
    .email("Invalid email.")
    .required("The email is required."),
  password: Yup.string()
    .required("The password is required.")
    .min(8, "The password is too short."),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], `Password doesn't match`)
    .required("You need to confirm your password."),
});

const SignUp = ({ signUp, loading, error, cleanUp }) => {
  useEffect(() => {
    return () => {
      cleanUp();
    };
  }, [cleanUp]);

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting }) => {
        await signUp(values);
        setSubmitting(false);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <FormWrapper>
          <Heading noMargin bold size="h2">
            sign up for an &#xfc;berCard account
          </Heading>
          <Heading size="h4">
            fill in your details to register your new account
          </Heading>
          <StyledForm>
            <Field
              type="text"
              name="firstName"
              placeholder="your first name..."
              component={Input}
            />
            <Field
              type="text"
              name="lastName"
              placeholder="your last name..."
              component={Input}
            />
            <Field
              type="email"
              name="email"
              placeholder="your email..."
              component={Input}
            />
            <Field
              type="password"
              name="password"
              placeholder="your password..."
              component={Input}
            />
            <Field
              type="password"
              name="confirmPassword"
              placeholder="re-type your password..."
              component={Input}
            />
            <Button
              disabled={!isValid || isSubmitting}
              loading={loading ? "signing up..." : null}
              type="submit"
            >
              sign up Free
            </Button>
            <LinksContainer>
              <Paragraph>by signing up, you accept the</Paragraph>
              <CustomLink2 link="/terms">terms of use</CustomLink2>
            </LinksContainer>
            <MessageWrapper>
              <Message error show={error}>
                {error}
              </Message>
            </MessageWrapper>
          </StyledForm>
        </FormWrapper>
      )}
    </Formik>
  );
};

const mapStateToProps = ({ auth }) => ({
  loading: auth.loading,
  error: auth.error,
});

const mapDispatchToProps = {
  signUp: actions.signUp,
  cleanUp: actions.clean,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
