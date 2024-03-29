import axios from "axios";

const WEATHERAPIKEY: string = "a646310093de4b4a8f4190244231501";

export const Request = (q: string) => {
  return axios.get(
    `https://api.weatherapi.com/v1/forecast.json?key=${WEATHERAPIKEY}&q=${q}&days=10&aqi=no&alerts=no`
  );
};

interface dataCurrent {
  cloud: number;
  condition: conditionData;
  feelslike_c: number;
  feelslike_f: number;
  gust_khp: number;
  gust_mph: number;
  humidity: number;
  is_day: number;
  last_update: string;
  last_updated_epoch: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
}
interface conditionData {
  code: number;
  icon: string;
  text: string;
}
interface forecastData {
  forecastday: forecastDay[];
}
interface forecastDay {
  astro: astro;
  date: string;
  date_epoch: number;
  day: day;
  hour: hour[];
}
export interface hour {
  chance_of_rain: number;
  chance_of_snow: number;
  cloud: number;
  condition: conditionData;
  dewpoint_c: number;
  dewpoint_f: number;
  feelslike_c: number;
  feelslike_f: number;
  gust_kph: number;
  gust_mph: number;
  heatindex_c: number;
  heatindex_f: number;
  humidity: number;
  is_day: number;
  precip_in: number;
  precip_mm: number;
  pressure_in: number;
  pressure_mb: number;
  temp_c: number;
  temp_f: number;
  time: string;
  time_epoch: number;
  uv: number;
  vis_km: number;
  vis_miles: number;
  will_it_rain: number;
  will_it_snow: number;
  wind_degree: number;
  wind_dir: string;
  wind_kph: number;
  wind_mph: number;
  windchill_c: number;
  windchill_f: number;
}
interface day {
  avghumidity: number;
  avgtemp_c: number;
  avgtemp_f: number;
  avgvis_km: number;
  avgvis_miles: number;
  condition: conditionData;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  daily_will_it_rain: number;
  daily_will_it_snow: number;
  maxtemp_c: number;
  maxtemp_f: number;
  maxwind_kph: number;
  maxwind_mph: number;
  mintemp_c: number;
  mintemp_f: number;
  totalprecip_in: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  uv: number;
}
interface astro {
  moon_illumination: string;
  moon_phase: string;
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
}
interface location {
  country: string;
  lat: number;
  localtime: string;
  localtime_epoch: number;
  lon: number;
  name: string;
  region: string;
  tz_id: string;
}
export interface weatherDataInterface {
  current: dataCurrent;
  forecast: forecastData;
  location: location;
}
export type dataCurrentInterface = {
  cityName:  string;
  countryShortcut:  string;
  currentTemperature:  number;
  minTemp:  number;
  maxTemp:  number;
  iconCode:  number;
};
export type dataTodayInfoInterface = {
  timezone: string;
  date: string;
  sunset: string;
  sunrise: string;
}
export type threeDaysDataInterface = {
  cityName: string;
  country: string;
  forecastData: forecastDay[]
}