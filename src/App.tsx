import Searching from "./components/searchCity/searchCity";
import styled, { keyframes } from "styled-components";
import CurrentWeather from "./components/currentWeather/currentWeather";
import ChangeDisplayedContentButtons from "./components/changeDisplayedContentButtons/sectionSelect";
import {
  dataCurrentInterface,
  dataTodayInfoInterface,
  Request,
  threeDaysDataInterface,
  weatherDataInterface,
} from "./api/weatherApi";
import { useEffect, useState } from "react";
import { Notify, Toast } from "./components/toast/toast";
import TodayInfo from "./components/todayInfo/todayInfo";
import Quote from "./components/quote/quote";
import { nanoid } from "nanoid";
import { AnimatePresence, motion } from "framer-motion";
import ThreeDaysWeather from "./components/threeDaysWeather/threeDaysWeather";
import { Charts } from "./components/charts/charts";
import { convertTo24Hour } from "./helpers/date";

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

  const [searchValue, setSearchValue] = useState<string>("");
  const [coords, setCoords] = useState<null | string>(null);
  const [weatherData, setWeatherData] = useState<weatherDataInterface | null>(
    null
  );
  const [geoError, setGeoError] = useState<null | string>(null);
  const [temperatureUnitCelsius, setTemperatureUnitCelsius] =
    useState<boolean>(true);
  const [isDay, setIsDay] = useState<boolean>(true || false);

  // const [isTodayShow, setIsTodayShow] = useState(true);
  const [todayActive, setTodayActive] = useState(true);
  const [fiveDaysActive, setFiveDaysActive] = useState(false);
  const [dataCurrent, setDataCurrent] = useState<dataCurrentInterface | null>(
    null
  );
  const [todayInfoData, setTodayInfoData] =
    useState<dataTodayInfoInterface | null>(null);
  const [threeDaysData, setThreeDaysData] =
    useState<threeDaysDataInterface | null>(null);
  const formatTemp = (temp: number) => {
    return Math.round(temp);
  };
  const handleClickToday = () => {
    if (todayActive) {
      return;
    } else {
      setTodayActive(!todayActive);
      setFiveDaysActive(!fiveDaysActive);
    }
  };
  const handleClickFiveDays = () => {
    if (fiveDaysActive) {
      return;
    } else {
      setFiveDaysActive(!fiveDaysActive);
      setTodayActive(!todayActive);
    }
  };

  const getData = async (req: string) => {
    const response = await Request(req);
    const data: weatherDataInterface = await response.data;
    setWeatherData(data);
    setIsDay(data.current.is_day === 1 ? true : false);
    setDataCurrent({
      cityName: data.location.name,
      countryShortcut: data.location.country,
      currentTemperature: formatTemp(
        temperatureUnitCelsius ? data.current.temp_c : data.current.temp_f
      ),
      minTemp: formatTemp(
        temperatureUnitCelsius
          ? data.forecast.forecastday[0].day.mintemp_c
          : data.forecast.forecastday[0].day.mintemp_f
      ),
      maxTemp: formatTemp(
        temperatureUnitCelsius
          ? data.forecast.forecastday[0].day.maxtemp_c
          : data.forecast.forecastday[0].day.maxtemp_f
      ),
      iconCode: data.current.condition.code,
    });
    setTodayInfoData({
      timezone: data.location.tz_id,
      date: data.location.localtime,
      sunrise: convertTo24Hour(data.forecast.forecastday[0].astro.sunrise),
      sunset: convertTo24Hour(data.forecast.forecastday[0].astro.sunset),
    });
    setTodayInfoData({
      date: data.location.localtime,
      timezone: data.location.tz_id,
      sunrise: convertTo24Hour(data.forecast.forecastday[0].astro.sunrise),
      sunset: convertTo24Hour(data.forecast.forecastday[0].astro.sunset),
    });
    setThreeDaysData({
      cityName: data.location.name,
      country: data.location.country,
      forecastData: data.forecast.forecastday,
    });
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
   
 
      <AppWrapper isDay={isDay}>
        <Searching
          setSearchInputValue={setSearchValue}
          geoFunction={getLocation}
          searchValue={searchValue}
        />

        {weatherData && (
         
            <AnimatePresence mode="wait">
              {todayActive ? (
                <AnimatedWrapper
                  
                  key={"today"}
                  initial={{ x: "-100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "-100vw" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <CurrentWeather
                    data={dataCurrent}
                    temperatureUnit={temperatureUnitCelsius}
                    isDay={isDay}
                    key={nanoid()}
                  />

                  <ChangeDisplayedContentButtons
                    fiveDaysActive={fiveDaysActive}
                    todayActive={todayActive}
                    handleClickFiveDays={handleClickFiveDays}
                    handleClickToday={handleClickToday}
                    key={nanoid()}
                  />
                  <TodayInfo data={todayInfoData!} />

                  <Quote />
                </AnimatedWrapper>
              ) : (
              <AnimatedWrapper
                  key="other"
                  initial={{ x: "100vw" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100vw" }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <ChangeDisplayedContentButtons
                    fiveDaysActive={fiveDaysActive}
                    todayActive={todayActive}
                    handleClickFiveDays={handleClickFiveDays}
                    handleClickToday={handleClickToday}
                    key={nanoid()}
                  />
                  <ThreeDaysWeather data={threeDaysData} />

                  <Charts data={threeDaysData} />
                </AnimatedWrapper>
              )}
            </AnimatePresence>
        
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
const AnimatedWrapper=styled(motion.div)`
  height: 85vh;
  max-height: fit-content;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  display: flex;
  flex-direction: column;
`
export default App;

     {
       /* <Toast key={nanoid()} /> */
     }
     {
       /* <AppWrapper
        isDay={isDay}
     
      >
        <Searching
          setSearchInputValue={setSearchValue}
          geoFunction={getLocation}
          searchValue={searchValue}
        />

        {weatherData && (
          <>
            {todayActive && (
              <CurrentWeather
                data={dataCurrent}
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
            {todayActive&&todayInfoData ? (
              <TodayInfo data={todayInfoData} />
            ) : (
              <>
                <ThreeDaysWeather data={threeDaysData} />
                <Charts data={threeDaysData} />
              </>
            )}
          </>
        )}

        {todayActive && <Quote />}
      </AppWrapper> */
     }
