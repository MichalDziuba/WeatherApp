import { useEffect, useState } from "react";
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
  activeSectionIndex?: number;
  index: number;
  moreInfoHandler: () => void;
};
const WeatherItem = ({
  dayOfWeek,
  dateDay,
  dateMonthShort,
  weatherCode,
  tempMin,
  tempMax,
  activeSectionIndex,
  index,
  moreInfoHandler,
}: WeatherItemProps) => {
  const [btnActive, setBtnActive] = useState(false);

  useEffect(() => {
    activeSectionIndex === index ? setBtnActive(true) : setBtnActive(false);
  }, [activeSectionIndex, index]);

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
      <MoreButton onClick={moreInfoHandler} active={btnActive}>
        more info
      </MoreButton>
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
  font-weight: 500;
`;
const DayOfWeek = styled.p`
  color: var(--colorTertiary);
  font-size: var(--fontMedium);
`;
const Date = styled.p`
  color: var(--colorPrimary);
  font-size: calc(var(--fontLarge));
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
  font-size: var(--fontMedium);
  color: var(--colorQuaternary);
`;
type MoreButtonProps = {
  active: boolean;
};
const MoreButton = styled.button<MoreButtonProps>`
  font-size: ${(props) =>
    props.active ? `var(--fontMedium)` : `var(--fontSmall);`};
  color: ${(props) =>
    props.active ? `var(--colorPrimary)` : `var(--colorTertiary)`};
  text-decoration: underline;
  font-weight: ${(props) => props.active && "600"};
  text-underline-offset: 2px;
  margin-top: 1rem;
`;

export default WeatherItem;
