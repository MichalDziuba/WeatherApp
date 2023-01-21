import moment from "moment";
export function getDateVariables(date: string) {
  const selectedDate = moment(date);
  const dayAndSuffix = selectedDate.format("Do").split(/([a-z]+)/);
  return {
    day: dayAndSuffix[0],
    month: selectedDate.format("MMMM"),
    suffix: dayAndSuffix[1],
    dayOfWeekShort: selectedDate.format("ddd"),
  };
}

export const convertTo24Hour = (time: string) => {
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
