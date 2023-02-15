import styled from "styled-components";
import { countryToAlpha2 } from "country-to-iso";
import { weatherDataInterface } from "../../api/api";
import WeatherIcon from "../weatherIcon/weatherIcon";
import { ContentWrapper } from "../contentWrapper/contentWrapper";
import AddToFavButton from "../addToFavButton/favButton";
import { motion, AnimatePresence } from "framer-motion";
import { nanoid } from "nanoid";
type CurrentWeatherProps = {
  data: weatherDataInterface;
  temperatureUnit: boolean;
  favCities: string[] | null;
  toggleFavCity: (city: string) => void;
  isDay: boolean;
};
const CurrentWeather = ({
  data,
  temperatureUnit,
  toggleFavCity,
  favCities,
  isDay,
}: CurrentWeatherProps) => {
  const formatTemp = (temp: number) => {
    return Math.round(temp);
  };

  const cityName = data.location.name;
  const countryShortcut = countryToAlpha2(data.location.country);
  const currentTemperature = formatTemp(
    temperatureUnit ? data.current.temp_c : data.current.temp_f
  );
  const todayLowestTemperature = formatTemp(
    temperatureUnit
      ? data.forecast.forecastday[0].day.mintemp_c
      : data.forecast.forecastday[0].day.mintemp_f
  );
  const todayHighestTemperature = formatTemp(
    temperatureUnit
      ? data.forecast.forecastday[0].day.maxtemp_c
      : data.forecast.forecastday[0].day.maxtemp_f
  );
  const iconCode = data.current.condition.code;


  return (
    <ContainerWeather>
      <CurrentWeatherWrapper
        initial={{ opacity: 0.1, x: -500 }}
        animate={{
          opacity: 1,
          x: 0
        }}
        exit={{ x: 1000 }}
        transition={{ duration: 0.5 }}
        key={nanoid()}
      >
        <WeatherIcon code={iconCode} isDay={isDay} />
        <CityInfo>
          {cityName},{countryShortcut}
          <AddToFavButton
            key={nanoid()}
            cityName={cityName}
            favCities={favCities}
            fn={()=>toggleFavCity(cityName)}
          />
        </CityInfo>
        <WeatherInfo>
          <CurrentTemp>
            {currentTemperature}
            <sup>{"\u00B0"}</sup>
            {temperatureUnit ? "C" : "F"}
          </CurrentTemp>
          <TemperaturesMinMaxWrapper>
            <TempWrapper>
              <TempName>min</TempName>
              <TempValue>
                {todayLowestTemperature}
                <sup>{"\u00B0"}</sup>
                {temperatureUnit ? "C" : "F"}
              </TempValue>
            </TempWrapper>
            <DecorLine />
            <TempWrapper>
              <TempName>max</TempName>
              <TempValue>
                {todayHighestTemperature}
                <sup>{"\u00B0"}</sup>
                {temperatureUnit ? "C" : "F"}
              </TempValue>
            </TempWrapper>
          </TemperaturesMinMaxWrapper>
        </WeatherInfo>
      </CurrentWeatherWrapper>
    </ContainerWeather>
  );
};

 export const ContainerWeather = styled(ContentWrapper)`
  background-color: var(--backgroundSecondary);
  border-radius: 30px;
`;
 const CurrentWeatherWrapper = styled(motion.div)`
  width: 100%;
  height: 11rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;
const CityInfo = styled.p`
  font-size: var(--fontMedium);
  color: var(--colorTertiary);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WeatherInfo = styled.div`
  width: 100%;
  display: flex;
  height: 30%;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 0.5rem;
`;
const CurrentTemp = styled.p`
  font-size: var(--fontLarge);
  color: var(--colorPrimary);
  width: 50%;
`;
const TemperaturesMinMaxWrapper = styled.div`
  display: flex;
  height: 100%;
  width: 30%;
  justify-content: center;
  align-items: center;
`;
const DecorLine = styled.span`
  content: "";
  width: 1px;
  height: 80%;
  background-color: var(--colorTertiary);

  margin: 0 auto;
`;

const TempValue = styled.p`
  margin: 0 auto;
  color: var(--colorPrimary);
  font-size: var(--fontMedium);
`;
const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
const TempName = styled.p`
  margin: 0 auto;
  font-size: var(--fontSmall);
  color: var(--colorTertiary);
`;

export default CurrentWeather;
