import styled from "styled-components";
import { weatherDataInterface } from "../../api/api";
import { convertTo24Hour, getDateVariables } from "../../helpers/date";
import Clock from "../clock/clock";
import { ContainerWeather } from "../currentWeather/currentWeather";
import iconSunset from "../../assets/icons/sunset.svg";
import iconSunrise from "../../assets/icons/sunrise.svg";
type TodayInfoProps = {
  data: weatherDataInterface;
};

const TodayInfo = ({ data }: TodayInfoProps) => {
  const date = getDateVariables(data.location.localtime);
  const timeZone = data.location.tz_id;
  const sunSet = convertTo24Hour(data.forecast.forecastday[0].astro.sunset);
  const sunRise = convertTo24Hour(data.forecast.forecastday[0].astro.sunrise);

  return (
    <ContainerToday>
      <WrapperContentFirst>
        <WrapperContentDate>
          <p>
            {date.day} <sup>{date.suffix}</sup>
          </p>
        </WrapperContentDate>
        <WrapperContentDate>
          <p>{date.dayOfWeekShort}</p>
        </WrapperContentDate>
      </WrapperContentFirst>
      <WrapperContent>
        <WrapperContentSmall>{date.month}</WrapperContentSmall> <DecorLine />
        <WrapperContentSmall>
          <Clock tzId={timeZone} />
        </WrapperContentSmall>
      </WrapperContent>
      <WrapperContent>
        <WrapperContentSun>
          <Icon src={iconSunrise} /> <p>{sunRise}</p>
        </WrapperContentSun>
        <DecorLine />
        <WrapperContentSun>
          <Icon src={iconSunset} /> <p>{sunSet}</p>
        </WrapperContentSun>
      </WrapperContent>
    </ContainerToday>
  );
};

const ContainerToday = styled(ContainerWeather)`
  background-color: var(--backgroundSecondary);
  margin-top: 1rem;
  color: var(--colorPrimary);
`;
const WrapperContent = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const WrapperContentFirst = styled(WrapperContent)`
  align-items: baseline;
`;
const WrapperContentSmall = styled.div`
  width: 50%;
  height: fit-content;
  justify-content: center;
  align-items: center;
  display: flex;
  height: fit-content;
  font-size: var(--fontMedium);
`;
const WrapperContentDate = styled(WrapperContentSmall)`
  font-size: var(--fontLarge);

  & p {
    margin: 0;
  }
`;
const WrapperContentSun = styled(WrapperContentSmall)`
  justify-content: space-evenly;
  align-items: center;
  & p {
    margin: 0;
  }
`;
const DecorLine = styled.span`
  content: "";
  width: 1px;
  height: 100%;
  background-color: var(--colorTertiary);
`;
const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export default TodayInfo;
