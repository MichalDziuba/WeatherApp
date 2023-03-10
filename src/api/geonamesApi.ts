import axios from "axios";

const geoNamesApiUserName = "TheMrFoka";

export const translateCityName = async (cityName: string) => {
  const url = `http://api.geonames.org/searchJSON?q=${cityName}&lang=en&maxRows=1&username=${geoNamesApiUserName}`;
  try {
    const response = await axios.get(url);
    const cityName = response.data.geonames[0].name;
    return cityName;
  } catch (error) {
    console.log(error);
  }
};
