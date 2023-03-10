import { useState } from "react";
import styled from "styled-components"
import { weatherDataInterface } from "../../api/weatherApi";
import { ChartButton } from "../chartButton/chartsButton";
import { ContentWrapper } from "../contentWrapper/contentWrapper"

type ChartsProps = {
  data: weatherDataInterface;
};
export const Charts = ({data}:ChartsProps) => {
    const [isChartsOpen, setChartsOpen] = useState(false);
console.log(data)
    const Temperature = data.forecast.forecastday.map((el) => {
        el.astro
    })
    console.log(Temperature)

    return <Wrapper isChartOpen={isChartsOpen} >
        <ChartButton openCharts={() => setChartsOpen(!isChartsOpen)} isChartsOpen={isChartsOpen} />
        {isChartsOpen && (
            <div>ALOHOMORA!</div>
        )}
    </Wrapper>
};




const Wrapper = styled(ContentWrapper)`
  flex-direction: column;
  justify-content: space-between;
  min-height: ${(props) =>
    props.isChartOpen ? `12rem` : "min-height"};
  border-radius: 30px;
  background: ${(props) =>
    props.isChartOpen ? `var(--backgroundSecondary)` : "transparent"};
`;