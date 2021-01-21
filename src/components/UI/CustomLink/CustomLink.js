import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../utils/theme.css";

export const LinksContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Paragraph = styled.div`
  font-weight: 400;
  font-size: 1.4rem;
  /* &:hover {
    transform: translateY(-3px);
  } */
`;
export const BaseLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 1.4rem;
  transition: all 0.2s;
  margin-left: 0.4rem;
  cursor: pointer;
  &:hover {
    transform: translateY(-3px);
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  font-size: 1.4rem;
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    transform: translateY(-3px);
  }
  padding: 0.2rem 2rem;
  color: ${({ color }) =>
    color === "white" ? "var(--color-white)" : "var(--color-textColor)"};

  &:active {
    transform: translateY(2px);
  }
`;

const CustomLink = ({ link, color, children }) => {
  return (
    <StyledLink to={link} color={color}>
      {children}
    </StyledLink>
  );
};
export const CustomLink2 = ({ link, color, children }) => {
  return (
    <BaseLink to={link} color={color}>
      {children}
    </BaseLink>
  );
};
export default CustomLink;
