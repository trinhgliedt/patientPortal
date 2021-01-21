import React from "react";
import styled from "styled-components";
import "../../../../utils/theme.css";

const InputWrapper = styled.div`
  width: 70%;
  display: flex;
  position: relative;
  /* margin-bottom: 1rem; */
  margin-bottom: ${({ showErrors }) => (showErrors ? "1.5rem" : "0.7rem")};
  flex-direction: column;
`;

const StyledInput = styled.input`
  padding: 0.7rem 1.5rem;
  width: 100%;
  /* background-color: var(--color-main); */
  font-weight: 500;
  font-size: 1.3rem;
  border-radius: 0.3rem;
  border: 1px solid grey;
  box-shadow: 0rem 0.5rem 3.5rem var(--shadow);
  &::placeholder {
    /* color: var(--color-white); */
  }
`;

const Error = styled.div`
  color: var(--color-errorRed);
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  opacity: ${({ show }) => (show ? "1" : "0")};
  transform: translateY(${({ show }) => (show ? "20px" : "10px")});
  transition: all 0.1s;
  position: fixed;
  padding: 0rem 1.5rem;
  margin-top: 0.9rem;
  font-weight: 500;
  font-size: 1.2rem;
`;

export const Input = ({ field, form: { touched, errors }, ...props }) => {
  return (
    <InputWrapper showErrors={errors[field.name] && touched[field.name]}>
      <StyledInput {...field} {...props} />
      <Error show={errors[field.name] && touched[field.name]}>
        {errors[field.name]}
      </Error>
    </InputWrapper>
  );
};

export const FieldRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const FieldLabel = styled.div`
  width: 15rem;
  margin-top: 1rem;
  font-size: 1.2rem;
  color: var(--color-textColor);
`;
