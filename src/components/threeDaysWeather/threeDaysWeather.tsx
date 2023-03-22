import { countryToAlpha2 } from "country-to-iso";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useState } from "react";
import styled from "styled-components";
import { hour, threeDaysDataInterface, weatherDataInterface } from "../../api/weatherApi";
import { getDateVariables } from "../../helpers/date";
import { ContentWrapper } from "../contentWrapper/contentWrapper";
import { ContainerWeather } from "../currentWeather/currentWeather";
import HoursSlider from "../weatherHoursSlider/weatherHoursSlider";
import WeatherItem from "../weatherItem/weatherItem";

type ThreeDaysForecast = {
  data: threeDaysDataInterface|null;
};

const ThreeDaysWeather = ({ data }: ThreeDaysForecast) => {

  const [showMore, setShowMore] = useState(false);
  const [displayedIndex, setDisplayedIndex] = useState<null | number>(null);
  const [displayedContent, setDisplayedContent] = useState<hour[] | null>(null);

  const moreInfoHandler = (idx: number, items: hour[]) => {
    setDisplayedIndex(idx);
    displayedIndex === idx
      ? (setShowMore(false),
        setDisplayedContent(null),
        setDisplayedIndex(null),
        setA(false))
      : (setShowMore(true),
        idx === 0 ? setDisplayedContent(items) : setDisplayedContent(items)),
      setTimeout(() => {
        setA(true);
      }, 500);
  };
  const [a, setA] = useState(false);
  return (
    data && (
      <AnimatedWrapper
        key={nanoid()}
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Wrapper
          bottom
          initial={{ height: "16rem" }}
          animate={
            showMore
              ? { height: "32.25rem", opacity: 1 }
              : { height: "16rem", opacity: 1 }
          }
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
        >
          <ThreeDaysWrapper>
            <CityWrapper>
              {data.cityName}, {countryToAlpha2(data.country)}
            </CityWrapper>
            <ItemsWrapper>
              {data.forecastData.map((el, idx) => {
                return (
                  <WeatherItem
                    key={idx}
                    dayOfWeek={getDateVariables(el.date).dayOfWeek}
                    dateDay={getDateVariables(el.date).day}
                    dateMonthShort={getDateVariables(el.date).monthShort}
                    tempMax={Math.round(el.day.maxtemp_c)}
                    tempMin={Math.round(el.day.mintemp_c)}
                    weatherCode={el.day.condition.code}
                    moreInfoHandler={() => moreInfoHandler(idx, el.hour)}
                    index={idx}
                    activeSectionIndex={displayedIndex!}
                  />
                );
              })}
            </ItemsWrapper>
          </ThreeDaysWrapper>
          {a && (
            <HoursWeatherWrapper>
              {showMore && displayedContent && (
                <HoursSlider data={displayedContent} />
              )}
            </HoursWeatherWrapper>
          )}
        </Wrapper>
      </AnimatedWrapper>
    )
  );
};
const Wrapper = styled(ContainerWeather)`
  display: flex;
  flex-direction: column;
  min-height: 16rem;
  max-height: fit-content;
`;
const AnimatedWrapper = styled(motion.div)`
  height: 90vh;
  width: 100%;
  /* align-items: center; */
  /* justify-content: space-evenly; */
  /* display: flex;
  flex-direction: column; */
`;
const ThreeDaysWrapper = styled(ContentWrapper)`
  width: 100%;
  min-height: 16rem;
  max-height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 400;
`;
const CityWrapper = styled.h3`
  width: 90%;
  text-align: center;
  font-size: var(--fontLarge);
  font-weight: 400;
`;
const ItemsWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 90%;
  justify-content: space-around;
`;
const HoursWeatherWrapper = styled.div`
  width: 90%;
  height: fit-content;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding-bottom: 0.5rem;
`;

export default ThreeDaysWeather;
