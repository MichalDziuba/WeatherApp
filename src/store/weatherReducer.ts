import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface WeatherDataTypes {
  cityName: string | null;
  country: string | null;
  todayCurrentTemp: number | null;
  todayMinTemp: number | null;
  todayMaxTemp: number | null;
  weatherCode: number | null;
  sunRise: number | null;
  sunSet: number | null;
}
const weatherDataState: WeatherDataTypes = {
  cityName: null,
  country: null,
  todayCurrentTemp: null,
  todayMinTemp: null,
  todayMaxTemp: null,
  weatherCode: null,
  sunRise: null,
  sunSet: null,
};
const weatherDataSlice = createSlice({
  name: "weatherData",
  initialState: weatherDataState,
  reducers: {
    setCityName: (state, action: PayloadAction<string>) => {
      state.cityName = action.payload;
    },
    setCountry: (state, action: PayloadAction<string>) => {
      state.country = action.payload;
    },
    setCurrentTemp: (state, action: PayloadAction<number>) => {
      state.todayCurrentTemp = action.payload;
    },
    setMinTemp: (state, action: PayloadAction<number>) => {
      state.todayMinTemp = action.payload;
    },
    setMaxTemp: (state, action: PayloadAction<number>) => {
      state.todayMaxTemp = action.payload;
    },
    setWeatherCode: (state, action: PayloadAction<number>) => {
      state.weatherCode = action.payload;
    },
    setSunRise: (state, action: PayloadAction<number>) => {
      state.sunRise = action.payload;
    },
    setSunSet: (state, action: PayloadAction<number>) => {
      state.sunSet = action.payload;
    },
  },
});
export const {
  setCityName,
  setCountry,
  setCurrentTemp,
  setMinTemp,
  setMaxTemp,
  setWeatherCode,
  setSunRise,
  setSunSet,
} = weatherDataSlice.actions;

export default weatherDataSlice.reducer;