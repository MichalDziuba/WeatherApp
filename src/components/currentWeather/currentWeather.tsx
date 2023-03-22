import styled from "styled-components";
import { countryToAlpha2 } from "country-to-iso";
import { dataCurrentInterface, weatherDataInterface } from "../../api/weatherApi";
import WeatherIcon from "../weatherIcon/weatherIcon";
import { ContentWrapper } from "../contentWrapper/contentWrapper";
import AddToFavButton from "../addToFavButton/favButton";
import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useAppSelector } from "../../store/hooks";

type CurrentWeatherProps = {
  data: dataCurrentInterface|null;
  temperatureUnit: boolean;
  isDay: boolean;

};
const CurrentWeather = ({
  data,
  temperatureUnit,
  isDay,
}: CurrentWeatherProps) => {



  const formatTemp = (temp: number) => {
    return Math.round(temp);
  };

  //  const cityName = data.location.name;
  //  const countryShortcut = countryToAlpha2(data.location.country);
  // const currentTemperature = formatTemp(
  //   temperatureUnit ? data.current.temp_c : data.current.temp_f
  // );
  // const todayLowestTemperature = formatTemp(
  //   temperatureUnit
  //     ? data.forecast.forecastday[0].day.mintemp_c
  //     : data.forecast.forecastday[0].day.mintemp_f
  // );
  // const todayHighestTemperature = formatTemp(
  //   temperatureUnit
  //     ? data.forecast.forecastday[0].day.maxtemp_c
  //     : data.forecast.forecastday[0].day.maxtemp_f
  // );
  // const iconCode = data.current.condition.code;

  return (
    data && (
      <ContainerWeather
      >
        <CurrentWeatherWrapper
          initial={{
            opacity: 0,
            // x: -500
          }}
          animate={{
            opacity: 1,
            // x: 0,
          }}
          transition={{ duration: 0.8 }}
          key={nanoid()}
        >
          <WeatherIcon code={data.iconCode} isDay={isDay} />
          <CityInfo>
            {data.cityName}, {countryToAlpha2(data.countryShortcut)}
            <AddToFavButton key={nanoid()} cityName={data.cityName} />
          </CityInfo>
          <WeatherInfo>
            <CurrentTemp>
              {data.currentTemperature}
              <sup>{"\u00B0"}</sup>
              {temperatureUnit ? "C" : "F"}
            </CurrentTemp>
            <TemperaturesMinMaxWrapper>
              <TempWrapper>
                <TempName>min</TempName>
                <TempValue>
                  {data.minTemp}
                  <sup>{"\u00B0"}</sup>
                  {temperatureUnit ? "C" : "F"}
                </TempValue>
              </TempWrapper>
              <DecorLine />
              <TempWrapper>
                <TempName>max</TempName>
                <TempValue>
                  {data.maxTemp}
                  <sup>{"\u00B0"}</sup>
                  {temperatureUnit ? "C" : "F"}
                </TempValue>
              </TempWrapper>
            </TemperaturesMinMaxWrapper>
          </WeatherInfo>
        </CurrentWeatherWrapper>
      </ContainerWeather>
    )
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
  font-size: var(--fontLarge);
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
  font-size: var(--fontExtraLarge);
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
  font-size: initial;
`;
const TempWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`;
const TempName = styled.p`
  margin: 0 auto;
  font-size: var(--fontMedium);
  color: var(--colorTertiary);
`;

export default CurrentWeather;
