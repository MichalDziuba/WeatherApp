import { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import './alice-carousel.css';
import { hour } from "../../api/weatherApi";
import { findClosestHourElement } from "../../helpers/date";
import WeatherItemForHour from "../weatherItemForHour/weatherItemForHour";
type HoursSliderProps = {
  data: hour[];
}
const HoursSlider = ({ data }: HoursSliderProps) => {

  const responsive = {
    0: { items: 1,  },
    320: { items: 2 },
    460: { items: 3 },
    768: { items: 4 },
    1024: { items: 6 },
    1200: { items: 7 },
    1440:{items:9}
  };
const [items, setItems] = useState<typeof WeatherItemForHour[]>([]);
  const RenderItems = data.map((el) => {
    return (
      <WeatherItemForHour chanceOfRain={el.chance_of_rain}
        chanceOfSnow={el.chance_of_snow} date={el.time}
        isDay={el.is_day}
        pressure={el.pressure_mb}
        temp_c={el.temp_c}
        temp_f={el.temp_f}
        weatherCode={el.condition.code}
        windSpeed={el.wind_kph}

      />
    )
  })
   const renderDotsItem = (item: any, index: any) => {
     return (
       <span
         style={{
           backgroundColor: "#eee",
           borderRadius: "50%",
           margin: "0 5px",
         }}
         key={index}
       />
     );
   };
  return (
    <AliceCarousel
      activeIndex={findClosestHourElement(data)}
      mouseTracking
      items={RenderItems}
      responsive={responsive}
      controlsStrategy="responsive"
      keyboardNavigation={true}
    />
  );
};
export default HoursSlider;
 // <Slider {...settings}>
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    //   <WeatherItemForHour
    //     chanceOfRain={0}
    //     chanceOfSnow={0}
    //     date={"22/12/2222"}
    //     isDay={0}
    //     pressure={2222}
    //     temp_c={0}
    //     temp_f={0}
    //     weatherCode={1000}
    //     windSpeed={1}
    //   />
    // </Slider>
      // const settings = {
  //   dots: true,
  //   infinite: false,
  //   speed: 500,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //    initialSlide: 0,
  // };