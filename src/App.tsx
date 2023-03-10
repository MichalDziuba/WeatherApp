import Searching from "./components/searchCity/searchCity";
import styled, { keyframes } from "styled-components";
import CurrentWeather from "./components/currentWeather/currentWeather";
import ChangeDisplayedContentButtons from "./components/changeDisplayedContentButtons/sectionSelect";
import { Request, weatherDataInterface } from "./api/weatherApi";
import { useEffect, useState } from "react";
import { Notify, Toast } from "./components/toast/toast";
import TodayInfo from "./components/todayInfo/todayInfo";
import Quote from "./components/quote/quote";
import { nanoid } from "nanoid";
import { AnimatePresence, motion } from "framer-motion";
import FiveDaysWeather from "./components/threeDaysWeather/threeDaysWeather";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { Charts } from "./components/charts/charts";


function App() {
  const dispatch = useAppDispatch();
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

  const [searchValue, setSearchValue] = useState<string>("");
  const [coords, setCoords] = useState<null | string>(null);
  const [weatherData, setWeatherData] = useState<weatherDataInterface | null>(
    null
  );
  const [geoError, setGeoError] = useState<null | string>(null);
  const [temperatureUnitCelsius, setTemperatureUnitCelsius] =
    useState<boolean>(true);
  const [isDay, setIsDay] = useState<boolean>(true || false);
  const [isTodayShow, setIsTodayShow] = useState(true);
  const [todayActive, setTodayActive] = useState(true);
  const [fiveDaysActive, setFiveDaysActive] = useState(false);
  // const [favoritesCities, setFavoritesCities] = useState<string[]>([]);



  const handleClickToday = () => {
    if (todayActive) {
      return;
    } else {
      setTodayActive(!todayActive);
      setFiveDaysActive(!fiveDaysActive);
      setIsTodayShow(true);
    }
  };
  const handleClickFiveDays = () => {
    if (fiveDaysActive) {
      return;
    } else {
      setFiveDaysActive(!fiveDaysActive);
      setTodayActive(!todayActive);
      setIsTodayShow(false);
    }
  };

  const getData = async (req: string) => {
    const response = await Request(req);
    const data: weatherDataInterface = await response.data;
    setWeatherData(data);
    setIsDay(data.current.is_day === 1 ? true : false);
  };

  const getLocation = async () => {
    await geoLocation();
    await getData(coords!);
    if (weatherData) {
      setSearchValue(weatherData?.location.name);
    }
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
    <AnimatePresence>
      {/* <Toast key={nanoid()} /> */}
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
          searchValue={searchValue}
        />

        {weatherData && (
          <>
            {isTodayShow && (
              <CurrentWeather
                data={weatherData}
                temperatureUnit={temperatureUnitCelsius}
                isDay={isDay}
                key={nanoid()}
              />
            )}

            <ChangeDisplayedContentButtons
              fiveDaysActive={fiveDaysActive}
              todayActive={todayActive}
              handleClickFiveDays={handleClickFiveDays}
              handleClickToday={handleClickToday}
              key={nanoid()}
            />
            {isTodayShow ? (
              <TodayInfo data={weatherData} />
            ) : (
              <>
                <FiveDaysWeather data={weatherData} />
                <Charts data={weatherData} />
              </>
            )}
          </>
        )}

        {isTodayShow && <Quote />}
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
// const [favoritesCities, setFavorites, remove] = useLocalStorage<string[]>(
//   "favoritesCities",
//   []
// );
// const toggleCityInFavorites = (city: string) => {
//   if (favoritesCities) {
//     favoritesCities?.includes(city);
//     const cityIndex = favoritesCities?.indexOf(city);

//     const isCityInFavCities = cityIndex !== -1;
//     const updatedCities = isCityInFavCities
//       ? favoritesCities?.filter((e, i) => i !== cityIndex)
//       : [...favoritesCities, city];
//     setFavorites(updatedCities);
//   }
// };
