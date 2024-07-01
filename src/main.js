import "./style.css";
import { getWeatherData } from "./get-weather-data.js";

getWeatherData()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });
