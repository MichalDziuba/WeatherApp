import { countryToAlpha2 } from "country-to-iso";
import styled from "styled-components";
import { weatherDataInterface } from "../../api/api";
import { getDateVariables } from "../../helpers/date";
import { ContentWrapper } from "../contentWrapper/contentWrapper";
import { ContainerWeather } from "../currentWeather/currentWeather";
import WeatherItem from "../weatherItem/weatherItem";

type ThreeDaysForecast = {
  data: weatherDataInterface;
};

const FiveDaysWeather = ({ data }: ThreeDaysForecast) => {
  const cityName = data.location.name;
    const countryShortcut = countryToAlpha2(data.location.country);
  const forecastsDays = data.forecast.forecastday;
  const dates = [forecastsDays.map((el) => getDateVariables(el.date).dayOfWeek)];

  console.log(forecastsDays);
  return (
    <ContainerWeather bottom>
      <FiveDaysWrapper>
              <CityWrapper>{cityName}, {countryShortcut}</CityWrapper>
              <ItemsWrapper>
          {forecastsDays.map((el, id) => {
            return (
              <>
              <WeatherItem
                key={id}
                dayOfWeek={getDateVariables(el.date).dayOfWeek}
                dateDay={getDateVariables(el.date).day}
                dateMonthShort={getDateVariables(el.date).monthShort}
                tempMax={Math.round(el.day.maxtemp_c)}
                tempMin={Math.round(el.day.mintemp_c)}
                weatherCode={el.day.condition.code}
                />
             
              </>
            );
                  })}
              </ItemsWrapper>
      </FiveDaysWrapper>
    </ContainerWeather>
  );
};
const FiveDaysWrapper = styled(ContentWrapper)`
  width: 100%;
  height: 14rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  font-weight: 400;

`;
const CityWrapper = styled.h3`
width: 90%;
text-align: center;
font-size: var(--fontMedium);
font-weight: 400;
`;
const ItemsWrapper = styled.div`
display: flex;
align-items:center;
width: 90%;
justify-content: space-around;
`


export default FiveDaysWeather;
