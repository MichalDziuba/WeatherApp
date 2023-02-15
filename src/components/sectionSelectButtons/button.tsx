import { useState } from "react";
import styled from "styled-components";

type ButtonProps = {
  text?: string,
  active?: boolean,
};

const Button = ({ text }: ButtonProps) => {
  return <Btn>{text}</Btn>;
};
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
export default Button;
