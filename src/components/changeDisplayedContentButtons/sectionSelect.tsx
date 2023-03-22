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
    <ButtonsWrapper
      key={nanoid()}
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Button
        active={todayActive}
        fn={handleClickToday}
        text="today"
        key={nanoid()}
      />
      <Button
        active={fiveDaysActive}
        fn={handleClickFiveDays}
        text="3 days"
        key={nanoid()}
      />
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
