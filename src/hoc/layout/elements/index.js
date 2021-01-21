import styled from "styled-components";
import { Form, Field } from "formik";
import "../../../utils/theme.css";

export const Container = styled.div`
  width: 100%;
  max-width: 88rem;
  background-color: var(--color-main);
  height: 100%;
`;

export const FormWrapper = styled.div`
  width: 50%;
  max-width: 50rem;
  border-radius: 0.2rem;
  padding: 1rem 5rem;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  /* background-color: var(--color-mainLight); */
  /* box-shadow: 0rem 0.5rem 3.5rem var(--shadow); */
`;

export const StyledForm = styled(Form)`
  display: flex;
  position: relative;
  align-items: center;
  width: 100%;

  flex-direction: column;
`;

export const StyledField = styled(Field)`
  margin: 0;
`;
