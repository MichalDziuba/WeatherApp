import Searching from "./components/searchCity/searchCity";
import SavedCities from "./components/favCities/favCities";
import styled, { keyframes } from "styled-components";
import CurrentWeather from "./components/currentWeather/currentWeather";
import Today5DaysButtons from "./components/Today-5DaysButtons/Today-5DaysWrapper";
import { Request, weatherDataInterface } from "./api/api";
import { useEffect, useState } from "react";
import { Notify, Toast } from "./components/toast/toast";
import TodayInfo from "./components/todayInfo/todayInfo";

function App() {
  const geoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = `${position.coords.latitude},${position.coords.longitude}`;
        setCoords(coords);
        setGeoError(null);
      },
      (error) => {
        // console.error(error);
        setCoords(null);
        setGeoError(
          "Your location services are blocked. Allow the app to access your location to get weather based on your location."
        );
      }
    );
  };

  const [searchValue, setSearchValue] = useState<null | string>(null);
  const [coords, setCoords] = useState<null | string>(null);
  const [weatherData, setWeatherData] = useState<weatherDataInterface | null>(
    null
  );
  const [geoError, setGeoError] = useState<null | string>(null);
  const [temperatureUnitCelsius, setTemperatureUnitCelsius] =
    useState<boolean>(true);
  const [isDay, setIsDay] = useState<boolean>(true || false);
  const getData = async (req: string) => {
    const response = await Request(req);
    const data: weatherDataInterface = await response.data;
    setWeatherData(data);
    setIsDay(data.current.is_day === 1 ? true : false);
  };
  const getLocation = async () => {
    await geoLocation();
    getData(coords!);
  };
  useEffect(() => {
    searchValue ? getData(searchValue) : null;
  }, [searchValue]);

  useEffect(() => {
    geoLocation();
    coords ? getData(coords) : null;
  }, [coords]);

  useEffect(() => {
    if (geoError) Notify(geoError);
  }, [geoError]);
  return (
    <AppWrapper isDay={isDay}>
      <Toast />
      <Searching
        setSearchInputValue={setSearchValue}
        geoFunction={getLocation}
      />
      <SavedCities />
      {weatherData && (
        <>
          <CurrentWeather
            data={weatherData}
            temperatureUnit={temperatureUnitCelsius}
          />
          <Today5DaysButtons />

          <TodayInfo data={weatherData} />
        </>
      )}
    </AppWrapper>
  );
}

interface AppWrapperProps {
  isDay: boolean;
}

const changeBackground = keyframes`
  0% {
    background-image: url("../src/assets/images/bg_night.webp");
  }
  100% {
    background-image: url("../src/assets/images/bg_day.webp");
  }
`;
const changeBackgroundReverse = keyframes`
  0% {
    background-image: url("../src/assets/images/bg_day.webp");
  }
  100% {
    background-image: url("../src/assets/images/bg_night.webp");
  }
`;

const AppWrapper = styled.div<AppWrapperProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(0.56deg, #000000 -10.48%, rgba(0, 0, 0, 0) 78.75%),
    ${({ isDay }) =>
      isDay
        ? `url("../src/assets/images/bg_day.webp")`
        : `url("../src/assets/images/bg_night.webp")`};
  background-position: center;
  background-size: cover;
  animation: ${({ isDay }) =>
      isDay ? changeBackground : changeBackgroundReverse}
    1s ease-in-out;
`;

export default App;
