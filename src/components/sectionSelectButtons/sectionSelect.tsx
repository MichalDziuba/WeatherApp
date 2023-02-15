import { useState } from "react";
import styled from "styled-components";
import Button from "./button";
import { ContentWrapper } from "../contentWrapper/contentWrapper";

const Today5DaysButtons = () => {
  const [isActive, setActive] = useState(false);

  return (
    <ButtonsWrapper>
      <Button text="today" />
      <Button text="5 days" />
    </ButtonsWrapper>
  );
};
const ButtonsWrapper = styled(ContentWrapper)`

  display: flex;
  align-items: center;
  justify-content: space-around;
  color:var(--colorSecondary);
`;

export default Today5DaysButtons;
