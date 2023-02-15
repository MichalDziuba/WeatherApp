import notAvailable from "../assets/icons/animated/not-available.svg";
import clearDay from "../assets/icons/animated/clear-day.svg";
import clearNight from "../assets/icons/animated/clear-night.svg";
import partyCloudyDay from "../assets/icons/animated/partly-cloudy-day.svg";
import partyCloudyNight from "../assets/icons/animated/partly-cloudy-night.svg";
import cloudy from "../assets/icons/animated/cloudy.svg";
import overcastDay from "../assets/icons/animated/overcast-day.svg";
import overcastNight from "../assets/icons/animated/overcast-night.svg";
import mistDay from "../assets/icons/animated/overcast-day.svg";
import mistNight from "../assets/icons/animated/overcast-night.svg";
import rain from "../assets/icons/animated/rain.svg";
import snow from "../assets/icons/animated/snow.svg";
import patchySleetDay from "../assets/icons/animated/partly-cloudy-day-sleet.svg";
import patchySleetNight from "../assets/icons/animated/partly-cloudy-night-sleet.svg";
import patchyFreezingDrizzleDay from "../assets/icons/animated/partly-cloudy-day-drizzle.svg";
import patchyFreezingDrizzleNight from "../assets/icons/animated/partly-cloudy-night-drizzle.svg";
import thunderyPossibleDay from "../assets/icons/animated/thunderstorms-day.svg";
import thunderyPossibleNight from "../assets/icons/animated/thunderstorms-night.svg";
import snowDay from "../assets/icons/animated/partly-cloudy-day-snow.svg";
import snowNight from "../assets/icons/animated/partly-cloudy-night-snow.svg";
import wind from "../assets/icons/animated/wind.svg";
import fogDay from "../assets/icons/animated/fog-day.svg";
import fogNight from "../assets/icons/animated/fog-night.svg";
import fog from "../assets/icons/animated/fog.svg";
import lightRainDay from "../assets/icons/animated/partly-cloudy-day-rain.svg";
import lightRainNight from "../assets/icons/animated/partly-cloudy-night-rain.svg";
import moderateRainDay from "../assets/icons/animated/partly-cloudy-day-drizzle.svg";
import moderateRainNight from "../assets/icons/animated/partly-cloudy-night-drizzle.svg";
import sleet from "../assets/icons/animated/sleet.svg";
import sleetDay from "../assets/icons/animated/partly-cloudy-day-sleet.svg";
import sleetNight from "../assets/icons/animated/partly-cloudy-night-sleet.svg";
import hail from "../assets/icons/animated/hail.svg";
import hailDay from "../assets/icons/animated/partly-cloudy-day-hail.svg";
import hailNight from "../assets/icons/animated/partly-cloudy-night-hail.svg";
import thunderStorms from "../assets/icons/animated/thunderstorms.svg";
import thunderStormsDay from "../assets/icons/animated/thunderstorms-day.svg";
import thunderStormsNight from "../assets/icons/animated/thunderstorms-night.svg";
import thunderStormsRainDay from "../assets/icons/animated/thunderstorms-day-rain.svg";
import thunderStormsRainNight from "../assets/icons/animated/thunderstorms-night-rain.svg";
import thunderStormsSnowDay from "../assets/icons/animated/thunderstorms-day-snow.svg";
import thunderStormsSnowNight from "../assets/icons/animated/thunderstorms-night-snow.svg";
type CodeToIconProps = {
  code: number;
  isDay?: boolean;
};

export const CodeToIcon = ({ code, isDay }: CodeToIconProps) => {
  let iconSrc: string;
  switch (code) {
    case 1000:
      iconSrc = `${isDay ? clearDay : clearNight}`;
      break;
    case 1003:
      iconSrc = `${isDay ? partyCloudyDay : partyCloudyNight}`;
      break;
    // case 1006:
    //   iconSrc = `${isDay ? partyCloudyDay : partyCloudyNight}`;
    //   break;
    case 1006:
      iconSrc = `${isDay ? cloudy : cloudy}`;
      break;
    case 1009:
      iconSrc = `${isDay ? overcastDay : overcastNight}`;
      break;
    case 1030:
      iconSrc = `${isDay ? mistDay : mistNight}`;
      break;
    case 1063:
      iconSrc = `${isDay ? rain : rain}`;
      break;
    case 1066:
      iconSrc = `${isDay ? snow : snow}`;
      break;
    case 1069:
      iconSrc = `${isDay ? patchySleetDay : patchySleetNight}`;
      break;
    case 1072:
      iconSrc = `${
        isDay ? patchyFreezingDrizzleDay : patchyFreezingDrizzleNight
      }`;
      break;
    case 1087:
      iconSrc = `${isDay ? thunderyPossibleDay : thunderyPossibleNight}`;
      break;
    case 1114:
      iconSrc = `${isDay ? snowDay : snowNight}`;
      break;
    case 1117:
      iconSrc = `${isDay ? wind : wind}`;
      break;
    case 1135:
      iconSrc = `${isDay ? fogDay : fogNight}`;
      break;
    case 1147:
      iconSrc = `${isDay ? fog : fog}`;
      break;
    case 1150:
      iconSrc = `${isDay ? rain : rain}`;
      break;
    case 1153:
      iconSrc = `${isDay ? rain : rain}`;
      break;
    case 1168:
      iconSrc = `${isDay ? rain : rain}`;
      break;
    case 1171:
      iconSrc = `${isDay ? rain : rain}`;
      break;
    case 1180:
      iconSrc = `${isDay ? lightRainDay : lightRainNight}`;
      break;
    case 1183:
      iconSrc = `${isDay ? lightRainDay : lightRainNight}`;
      break;
    case 1186:
      iconSrc = `${isDay ? moderateRainDay : moderateRainNight}`;
      break;
    case 1189:
      iconSrc = `${isDay ? moderateRainDay : moderateRainNight}`;
      break;
    case 1192:
      iconSrc = `${isDay ? moderateRainDay : moderateRainNight}`;
      break;
    case 1195:
      iconSrc = `${isDay ? moderateRainDay : moderateRainNight}`;
      break;
    case 1198:
      iconSrc = `${isDay ? lightRainDay : lightRainNight}`;
      break;
    case 1204:
      iconSrc = `${isDay ? sleet : sleet}`;
      break;
    case 1207:
      iconSrc = `${isDay ? sleet : sleet}`;
      break;
    case 1210:
      iconSrc = `${isDay ? snowDay : snowNight}`;
      break;
    case 1213:
      iconSrc = `${isDay ? snowDay : snowNight}`;
      break;
    case 1216:
      iconSrc = `${isDay ? snow : snow}`;
      break;
    case 1219:
      iconSrc = `${isDay ? snow : snow}`;
      break;
    case 1222:
      iconSrc = `${isDay ? snow : snow}`;
      break;
    case 1225:
      iconSrc = `${isDay ? snow : snow}`;
      break;
    case 1237:
      iconSrc = `${isDay ? hail : hail}`;
      break;
    case 1240:
      iconSrc = `${isDay ? hail : hail}`;
      break;
    case 1243:
      iconSrc = `${isDay ? hailDay : hailNight}`;
      break;
    case 1246:
      iconSrc = `${isDay ? rain : rain}`;
      break;
    case 1249:
      iconSrc = `${isDay ? sleetDay : sleetNight}`;
      break;
    case 1252:
      iconSrc = `${isDay ? sleet : sleet}`;
      break;
    case 1255:
      iconSrc = `${isDay ? snowDay : snowNight}`;
      break;
    case 1258:
      iconSrc = `${isDay ? snow : snow}`;
      break;
    case 1261:
      iconSrc = `${isDay ? hailDay : hailNight}`;
      break;
    case 1264:
      iconSrc = `${isDay ? hail : hail}`;
      break;
    case 1273:
      iconSrc = `${isDay ? thunderStormsRainDay : thunderStormsRainNight}`;
      break;
    case 1276:
      iconSrc = `${isDay ? thunderStormsRainDay : thunderStormsRainNight}`;
      break;
    case 1279:
      iconSrc = `${isDay ? thunderStormsSnowDay : thunderStormsSnowNight}`;
      break;
    case 1282:
      iconSrc = `${isDay ? thunderStormsSnowDay : thunderStormsSnowNight}`;
      break;
    default:
      iconSrc = notAvailable;
  }
  return iconSrc;
};
