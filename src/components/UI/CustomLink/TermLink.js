import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../../../utils/theme.css";

const StyledLink = styled(Link)`
  text-decoration: none;
  font-weight: 400;
  padding: 1rem 2rem;
  font-size: 1.4rem;
  margin-bottom: 2rem;
  transition: all 0.2s;
  cursor: pointer;
  color: ${({ color }) =>
    color === "white" ? "var(--color-white)" : "var(--color-textColor)"};

  &:hover {
    transform: translateY(-3px);
  }

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

export default CustomLink;
