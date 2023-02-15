import styled from "styled-components";
import { DecorLine } from "../todayInfo/todayInfo";
import WeatherIcon from "../weatherIcon/weatherIcon";
type WeatherItemProps = {
  dayOfWeek: string;
  dateDay: string;
  dateMonthShort: string;
  weatherCode: number;
  tempMin: number;
  tempMax: number;
};
const WeatherItem = ({
  dayOfWeek,
  dateDay,
  dateMonthShort,
  weatherCode,
  tempMin,
  tempMax,
}: WeatherItemProps) => {
  return (
    <ItemWrapper>
      <DayOfWeek>{dayOfWeek}</DayOfWeek>
      <Date>
        {dateDay} {dateMonthShort}
      </Date>
      <WeatherIcon code={weatherCode} isDay={true} />
      <MinMaxWrapper>
        <MinMaxContent>
          <TempType>min</TempType>
          <TempValue>{tempMin}</TempValue>
        </MinMaxContent>
        <DecorLine />
        <MinMaxContent>
          <TempType>max</TempType>
          <TempValue>{tempMax}</TempValue>
        </MinMaxContent>
      </MinMaxWrapper>
      <MoreButton>more info</MoreButton>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  width: 30%;
  height: 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;
const DayOfWeek = styled.p`
  color: var(--colorTertiary);
  font-size: var(--fontSmall);
`;
const Date = styled.p`
  color: var(--colorPrimary);
  font-size: calc(var(--fontSmall));
`;
const MinMaxWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 2.3rem;
  align-items: center;
  justify-content: space-around;
`;
const MinMaxContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const TempType = styled.p`
  font-size: var(--fontSmall);
  color: var(--colorTertiary);
`;
const TempValue = styled.p`
  font-size: var(--fontSmall);
  color: var(--colorQuaternary);
`;
const MoreButton = styled.button`
  font-size: var(--fontSmall);
  color: var(--colorTertiary);
  text-decoration: underline;
  text-underline-offset: 2px;
`;

export default WeatherItem;
