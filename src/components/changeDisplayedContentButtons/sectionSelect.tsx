import { useState } from "react";
import styled from "styled-components";
import Button from "./button";
import { ContentWrapper } from "../contentWrapper/contentWrapper";
import { nanoid } from "nanoid";

type ChangeDisplayedContentButtonsProps = {
  handleClickToday: () => void;
  handleClickFiveDays: () => void;
  todayActive: boolean;
  fiveDaysActive: boolean;
};

const ChangeDisplayedContentButtons = ({
  handleClickToday,
  handleClickFiveDays,
  todayActive,
  fiveDaysActive,
}: ChangeDisplayedContentButtonsProps) => {
  return (
    <ButtonsWrapper>
      <Button active={todayActive} fn={handleClickToday} text="today" key={nanoid()}/>
      <Button active={fiveDaysActive} fn={handleClickFiveDays} text="5 days" key={nanoid()} />
    </ButtonsWrapper>
  );
};
const ButtonsWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--colorSecondary);
`;

export default ChangeDisplayedContentButtons;
