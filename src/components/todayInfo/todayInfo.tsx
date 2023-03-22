import styled from "styled-components";
import { dataTodayInfoInterface, weatherDataInterface } from "../../api/weatherApi";
import { convertTo24Hour, getDateVariables } from "../../helpers/date";
import Clock from "../clock/clock";
import iconSunset from "../../assets/icons/animated/sunset.svg";
import iconSunrise from "../../assets/icons/animated/sunrise.svg";
import { ContentWrapper } from "../contentWrapper/contentWrapper";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
type TodayInfoProps = {
  data: dataTodayInfoInterface;
};

const TodayInfo = ({ data }: TodayInfoProps) => {
  // const timeZone = data.location.tz_id;
  // const date = getDateVariables(data.location.localtime);
  // const sunSet = convertTo24Hour(data.forecast.forecastday[0].astro.sunset);
  // const sunRise = convertTo24Hour(data.forecast.forecastday[0].astro.sunrise);
const date=getDateVariables(data.date)
  return (
    <ContainerToday
      key={nanoid()}
      initial={{ x: "-100vw" }}
      animate={{ x: 0 }}
      exit={{ x: "-100vw" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <TodayInfoWrapper
        initial={{
          opacity: 0.1,
          // x: 500
        }}
        animate={{
          opacity: 1,
          // x: 0
        }}
        exit={{ x: 1000 }}
        transition={{ duration: 0.5 }}
        key={nanoid()}
      >
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
            <Clock tzId={data.timezone} />
          </WrapperContentSmall>
        </WrapperContent>
        <WrapperContent>
          <WrapperContentSun>
            <Icon src={iconSunrise} /> <p>{data.sunrise}</p>
          </WrapperContentSun>
          <DecorLine />
          <WrapperContentSun>
            <Icon src={iconSunset} /> <p>{data.sunset}</p>
          </WrapperContentSun>
        </WrapperContent>
      </TodayInfoWrapper>
    </ContainerToday>
  );
};

const ContainerToday = styled(ContentWrapper)`
  background-color: var(--backgroundSecondary);
  flex-direction: column;
  border-radius: 30px;
`;
const TodayInfoWrapper = styled(motion.div)`
  width: 100%;
  height: 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
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
  font-size: var(--fontLarge);
`;
const WrapperContentDate = styled(WrapperContentSmall)`
  font-size: var(--fontExtraLarge);
  min-width: fit-content;
`;
const WrapperContentSun = styled(WrapperContentSmall)`
  justify-content: space-evenly;
  align-items: center;
`;
export const DecorLine = styled.span`
  content: "";
  width: 1px;
  height: 90%;
  background-color: var(--colorTertiary);
`;
const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 0;
  overflow: hidden;
`;

export default TodayInfo;
