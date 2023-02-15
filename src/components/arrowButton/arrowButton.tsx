import styled from "styled-components";
import { LordIcon } from "../lordIcon/lordIcon";

type ArrowButtonProps = {
  direction: "left" | "right";
  fn: (direction: "left" | "right") => void;
  isDay: boolean;
  isVisible: boolean;
};
type BtnProps = {
  isVisible?: boolean;
};
const ArrowButton = ({ fn, direction, isDay, isVisible }: ArrowButtonProps) => {
  return (
    <ArrowBtn onClick={() => fn(direction)} isVisible={isVisible}>
      <LordIcon
        src={
          direction === "left"
            ? "https://cdn.lordicon.com/onyplpvn.json"
            : "https://cdn.lordicon.com/zpcieyfp.json"
        }
        trigger="morph"
        stroke="100"
        colors={{ primary: `${isDay ? "#000000" : "#ffffff"}` }}
        size={20}
      />
    </ArrowBtn>
  );
};

const ArrowBtn = styled.button<BtnProps>`
  width: fit-content;
  height: fit-content;
  background: transparent;
  visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
`;

export default ArrowButton;
