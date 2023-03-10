import styled from "styled-components";
import { LordIcon } from "../lordIcon/lordIcon";
type ChartButtonProps = {
    openCharts: () => void;
    isChartsOpen: boolean;
}
export const ChartButton = ({openCharts,isChartsOpen}:ChartButtonProps) => {
  return (
    <Button type="button" onClick={openCharts}>
          <p>{isChartsOpen?"Hide":"Show" } Chart</p>
      <LordIcon
        src={
          isChartsOpen
            ? "https://cdn.lordicon.com/ygydemai.json"
            : "https://cdn.lordicon.com/ejwormhf.json"
        }
        trigger="hover"
        stroke="100"
        colors={{ primary: "#ff6b09" }}
        size={24}
      />
    </Button>
  );
};

const Button = styled.button`
  width: 8rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  text-align: center;
  height: 2rem;
  text-decoration: underline;
  text-underline-offset: 2px;
  color: var(--colorQuaternary);
`;
