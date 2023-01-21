import { useState } from "react";
import styled from "styled-components";

const Btn = styled.button<ButtonProps>`
  padding: 2px 12px;
  gap: 10px;
  border-radius: 20px;
  text-align: center;
  font-size: var(--fontMedium);
  color: var(--fontSecondary);
  text-transform: uppercase;
  background-color: ${(props) =>
    props.active
      ? `var(--backgroundQuaternary )`
      : `var(--backgroundTertiary)`};
`;
type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return <Btn>{text}</Btn>;
};
export default Button;
