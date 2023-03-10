import { countryToAlpha2 } from "country-to-iso";
import { useState } from "react";
import styled from "styled-components";
import { hour, weatherDataInterface } from "../../api/weatherApi";
import { getDateVariables } from "../../helpers/date";
import { ContentWrapper } from "../contentWrapper/contentWrapper";
import { ContainerWeather } from "../currentWeather/currentWeather";
import HoursSlider from "../weatherHoursSlider/weatherHoursSlider";
import WeatherItem from "../weatherItem/weatherItem";

type ThreeDaysForecast = {
  data: weatherDataInterface;
};

const FiveDaysWeather = ({ data }: ThreeDaysForecast) => {
  const cityName = data.location.name;
  const countryShortcut = countryToAlpha2(data.location.country);
  const forecastsDays = data.forecast.forecastday;
  const [showMore, setShowMore] = useState(false);
  const [displayedIndex, setDisplayedIndex] = useState<null | number>(null);
  const [displayedContent, setDisplayedContent] = useState<hour[] | null>(null);

  const moreInfoHandler = (idx: number, items: hour[]) => {
    setDisplayedIndex(idx);
    displayedIndex === idx
      ? (setShowMore(false), setDisplayedContent(null), setDisplayedIndex(null))
      : (setShowMore(true),
        idx === 0
          ? setDisplayedContent(items)
          : setDisplayedContent(items));
  };

  return (
    <Wrapper bottom>
      <FiveDaysWrapper>
        <CityWrapper>
          {cityName}, {countryShortcut}
        </CityWrapper>
        <ItemsWrapper>
          {forecastsDays.map((el, idx) => {
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
      </FiveDaysWrapper>
      <HoursWeatherWrapper>
        {showMore && displayedContent && (
          <HoursSlider data={displayedContent}/>
        )}
      </HoursWeatherWrapper>
    </Wrapper>
  );
};
const Wrapper = styled(ContainerWeather)`
  display: flex;
  flex-direction: column;
`;
const FiveDaysWrapper = styled(ContentWrapper)`
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

export default FiveDaysWeather;
