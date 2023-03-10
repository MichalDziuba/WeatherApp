import styled from "styled-components";
import WeatherIcon from "../weatherIcon/weatherIcon";
import barometerIcon from "../../assets/icons/animated/barometer.svg";
import humidityIcon from "../../assets/icons/animated/humidity.svg";
import windIcon from "../../assets/icons/animated/windsock.svg";
type WeatherItemHourProps = {
  date: string;
  weatherCode: number;
  temp_c: number;
  temp_f: number;
  pressure: number;
  chanceOfRain: number;
  chanceOfSnow: number;
  windSpeed: number;
  isDay: number;
};
const WeatherItemForHour = ({
  date,
  weatherCode,
  isDay,
  temp_c,
  temp_f,
  pressure,
  chanceOfRain,
  chanceOfSnow,
  windSpeed,
}: WeatherItemHourProps) => {
  const isDayCovert = isDay === 1 ? true : false;
  const time = date.split(" ")[1];
  function roundToHalf(num: number) {
    return Math.round(num * 2) / 2;
  }
  const precipitationProbability = (
    chanceOfRain: number,
    chanceOfSnow: number
  ) => {
    return chanceOfRain >= chanceOfSnow ? chanceOfRain : chanceOfSnow;
  };

  return (
    <ItemWrapper>
      <p>{time}</p>
      <WeatherIcon code={weatherCode} isDay={isDayCovert} />
      <Temp>
        {Math.round(temp_c)} <sup>{"\u00B0"}</sup>C
      </Temp>
      <DataWrapper>
        <IconSmall src={barometerIcon} /> <p>{pressure} hPa</p>
      </DataWrapper>
      <DataWrapper>
        <IconSmall src={humidityIcon} />
        <p>{precipitationProbability(chanceOfRain, chanceOfSnow)} %</p>
      </DataWrapper>
      <DataWrapper>
        <IconSmall src={windIcon} />
        <p>{roundToHalf(windSpeed)} km/h</p>
      </DataWrapper>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  height: 13.5rem;
  width: 7rem;
  /* max-width: 7.5rem; */
  border-radius: 25px;
  border: 1px solid var(--colorTertiary);
  background: inherit;
  display: flex;
  align-items: center;
  font-size: var(--fontMedium);
  color: var(--colorTertiary);
  text-align: center;
  flex-direction: column;
  margin: auto;
`;

const Temp = styled.p`
  font-size: var(--fontLarge);
  color: var(--colorQuaternary);
  font-weight: 500;
`;
const DataWrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;
const IconSmall = styled.img`
  width: 2rem;
  height: 2rem;
`;

export default WeatherItemForHour;
