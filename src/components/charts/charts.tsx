import { useEffect, useState } from "react";
import styled from "styled-components";
import { threeDaysDataInterface } from "../../api/weatherApi";
import { ChartButton } from "../chartButton/chartsButton";
import { ContentWrapper } from "../contentWrapper/contentWrapper";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { getDateVariables } from "../../helpers/date";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";

type ChartsProps = {
  data: threeDaysDataInterface | null;
};
export const Charts = ({ data }: ChartsProps) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const [isChartsOpen, setChartsOpen] = useState(false);

  const [temperatures, setTemperatures] = useState<number[]>([]);
  const [humidity, setHumidity] = useState<number[]>([]);
  const [windSpeed, setWindSpeed] = useState<number[]>([]);
  const [pressure, setPressure] = useState<number[]>([]);
  const [labels, setLabels] = useState<string[]>([]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        grid: {
          color: "grey",
        },
      },
      x: {
        grid: {
          color: "gray",
        },
      },
    },
    plugins: {
      legend: {
        position: "top" as const,
        align: "start" as const,
        labels: {
          boxWidth: 20,
          boxHeight: 5,
        },
      },
    },
  };

  const a = true;
  const dataCharts = {
    labels,
    datasets: [
      {
        label: ` Temperatures ${a ? "C" : "F"}\u00B0 `,
        data: temperatures,
        borderColor: "#FF6B09",
        backgroundColor: "#FF6B09",
      },
      {
        label: "Humidity %",
        data: humidity,
        borderColor: "#0906EB",
        backgroundColor: "#0906EB",
      },
      {
        label: "Wind Speed km/h",
        data: windSpeed,
        borderColor: "#EA9A05",
        backgroundColor: "#EA9A05",
      },
    ],
  };

  useEffect(() => {
    const temp: number[] = [];
    const hum: number[] = [];
    const wind: number[] = [];
    const press: number[] = [];
    const lbl: string[] = [];

    data?.forecastData.forEach((e) => {
      temp.push(e.day.maxtemp_c);
      hum.push(e.day.totalprecip_mm);
      wind.push(e.day.maxwind_kph);
      press.push(e.hour[0].pressure_mb);
      lbl.push(getDateVariables(e.date).shortDate);
    });
    setTemperatures(temp);
    setHumidity(hum);
    setWindSpeed(wind);
    setLabels(lbl);
    setPressure(press);
  }, [data]);

  return (

      <Wrapper
        isChartOpen={isChartsOpen}
        bottom
        initial={{ opacity: 1 }}
        animate={isChartsOpen ? { height: "12rem" } : { height: "2rem" }}
      >
        <ChartButton
          openCharts={() => setChartsOpen(!isChartsOpen)}
          isChartsOpen={isChartsOpen}
        />
        {isChartsOpen && (
          <ChartsWrapper>
            <StyledLine options={options} data={dataCharts} />
          </ChartsWrapper>
        )}
      </Wrapper>

  );
};

const Wrapper = styled(ContentWrapper)`
  overflow: hidden;
  flex-direction: column;

  /* min-height: ${(props) => (props.isChartOpen ? `12rem` : "min-height")}; */
  min-height: fit-content;

  border-radius: 30px;
  background: ${(props) =>
    props.isChartOpen ? `var(--backgroundSecondary)` : "transparent"};
`;

const ChartsWrapper = styled.div`
  display: grid;
  place-content: center;
  width: 95%;
  min-height: 10rem;

  margin-bottom: 1rem;
`;
const StyledLine = styled(Line)`
  height: 100%;
  width: 100%;
`;
