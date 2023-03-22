import moment from "moment";
import { hour } from "../api/weatherApi";

function getDateVariables(date: string) {
  const selectedDate = moment(date, "YYYY-MM-DD HH:mm");
  const dayAndSuffix = selectedDate.format("Do").split(/([a-z]+)/);
  return {
    day: dayAndSuffix[0],
    month: selectedDate.format("MMMM"),
    year: selectedDate.format("YYYY"),
    monthShort: selectedDate.format("MMMM").slice(0, 3),
    suffix: dayAndSuffix[1],
    dayOfWeek: selectedDate.format("dddd"),
    dayOfWeekShort: selectedDate.format("ddd"),
    shortDate: `${selectedDate.format("MMMM").slice(0, 3)} ${
      dayAndSuffix[0]
    },${selectedDate.format("YYYY")}`,
  };
}

const convertTo24Hour = (time: string) => {
  let hours = parseInt(time.slice(0, 2), 10);
  let minutes = parseInt(time.slice(3, 5), 10);
  let ampm = time.slice(6, 8);
  if (ampm === "PM" && hours !== 12) {
    hours += 12;
  }
  let formattedHours = hours.toString().padStart(2, "0");
  let formattedMinutes = minutes.toString().padStart(2, "0");
  return formattedHours + ":" + formattedMinutes;
};
// export const filterDates = (array: hour[]) => {
//   const currentMoment = moment();
//   const filteredDates = array.filter((object) => {
//     const momentDate = moment(object.time, "YYYY-MM-DD HH:mm");
//     return momentDate.isSameOrAfter(currentMoment);
//   });
//   return filteredDates;
// };
const findClosestHourElement = (array: hour[]) => {
  const currentMoment = moment();
  let closestIndex = 0;
  let closestDiff = Infinity;
  array.forEach((object, index) => {
    const momentDate = moment(object.time, "YYYY-MM-DD HH:mm");
    const diff = momentDate.diff(currentMoment);
    if (diff >= 0 && diff < closestDiff) {
      closestDiff = diff;
      closestIndex = index;
    }
  });
  return closestIndex;
};
export { findClosestHourElement, convertTo24Hour, getDateVariables };
