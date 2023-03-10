import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
interface WeatherDataTypes {
    cityName: string | null;
    country: string | null;

}
const weatherDataState:WeatherDataTypes = {
    cityName: null,
    country:null,
}