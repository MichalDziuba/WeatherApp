import Searching from "./components/searchCity/searchCity";
import styled, { keyframes } from "styled-components";
import CurrentWeather from "./components/currentWeather/currentWeather";
import Today5DaysButtons from "./components/sectionSelectButtons/sectionSelect";
import { Request, weatherDataInterface } from "./api/api";
import { useEffect, useMemo, useState } from "react";
import { Notify, Toast } from "./components/toast/toast";
import TodayInfo from "./components/todayInfo/todayInfo";
import Quote from "./components/quote/quote";

import {
  getLocalStorageData,
  updateLocalStorage,
} from "./helpers/useLocalStorage";
import { nanoid } from "nanoid";
import { AnimatePresence, motion } from "framer-motion";
import FiveDaysWeather from "./components/threeDaysWeather/threeDaysWeather";

function App() {
  const geoLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const coords = `${position.coords.latitude},${position.coords.longitude}`;
        setCoords(coords);
        setGeoError(null);
      },
      (error) => {
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
  const [favCities, updateFavCities] = useState<string[]>([]);
  const [activeSection, setActiveSection] = useState<"today" | "5days">(
    "today"
  );

  const toggleFavCity = (city: string) => {
    if (!favCities || city.length === 0) {
      return;
    }
    const cityIndex = favCities.indexOf(city);

    const isCityInFavCities = cityIndex !== -1;
    const updatedCities = isCityInFavCities
      ? favCities.filter((e, i) => i !== cityIndex)
      : [...favCities, city];

    updateFavCities(updatedCities);
    updateLocalStorage("favCities", updatedCities);
  };

  const getData = async (req: string) => {
    const response = await Request(req);
    const data: weatherDataInterface = await response.data;
    setWeatherData(data);
    setIsDay(data.current.is_day === 1 ? true : false);
  };

  const getLocation = () => {
    geoLocation();
    getData(coords!);
  };
  useEffect(() => {
    updateFavCities(getLocalStorageData("favCities"));
  }, []);

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
    <AnimatePresence >
      {/* <Toast /> */}
      <AppWrapper
        isDay={isDay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Searching
          setSearchInputValue={setSearchValue}
          geoFunction={getLocation}
          favCities={favCities}
        />

        {weatherData && (
          <>
            {activeSection === "today" && (
              <CurrentWeather
                favCities={favCities}
                data={weatherData}
                temperatureUnit={temperatureUnitCelsius}
                toggleFavCity={toggleFavCity}
                isDay={isDay}
                key={nanoid()}
              />
            )}

            <Today5DaysButtons key={nanoid()} />
            {activeSection === "today" && <TodayInfo data={weatherData} />}
            {activeSection === "5days" && (
              <FiveDaysWeather data={weatherData} />
            )}
          </>
        )}

        {activeSection === "today" && <Quote />}
      </AppWrapper>
     </AnimatePresence>
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
export const animationEntry = keyframes`
0%{
  transform: scale(0);
}
75%{
  transform: scale(1.1);
}
100%{
  transform: scale(1);
}
`;
const AppWrapper = styled(motion.div)<AppWrapperProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  align-items: center;
  width: 100vw;
  max-width: 100vw;
  min-height: 100vh;
  max-height: fit-content;
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
  overflow: hidden;
`;

export default App;
