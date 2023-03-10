import { useState } from "react";
import styled from "styled-components";

type ButtonProps = {
  text?: string;
  active?: boolean;
  fn?: () => void;
};

const Button = ({ text, active, fn }: ButtonProps) => {
  return (
    <Btn onClick={fn} active={active}>
      {text}
    </Btn>
  );
};
const Btn = styled.button<ButtonProps>`
  padding: 6px 22px;
  gap: 10px;
  border-radius: 20px;
  text-align: center;
  font-family: "Montserrat", sans-serif;
  font-size: var(--fontMedium);
  font-weight: 500;
  color: var(--fontSecondary);
  line-height: 1.2;
  font-weight: 600;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.active
      ? `var(--backgroundQuaternary )`
      : `var(--backgroundTertiary)`};
`;
export default Button;
