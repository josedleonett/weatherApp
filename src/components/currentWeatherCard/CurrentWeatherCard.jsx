import { MdDewPoint } from "react-icons/md";
import { WiBarometer } from "react-icons/wi";
import { GiBinoculars } from "react-icons/gi";
import { BsDropletHalf } from "react-icons/bs";
import { GiWindsock } from "react-icons/gi";
import React, { useContext } from "react";
import CurrentWeatherDetails from "../currentWeatherDetails/CurrentWeatherDetails";
import { ContextGlobal } from "../../utils/global.context";
import styles from "./CurrentWeatherCard.module.css";

const CurrentWeatherCard = ({ minTemperature, wind }) => {
  const { state } = useContext(ContextGlobal);


  const fulldate = "2023-07-20T01:00";
  const dateObj = new Date(fulldate);

  const formattedDate = dateObj.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const formattedTime = dateObj.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });



  const getWeatherCondition = (wmoCode) => {
    const weatherCodeMapping = state.weatherCodeMapping;
    if (wmoCode in weatherCodeMapping) {
      return state.weatherCodeMapping[wmoCode].weatherCondition;
    } else {
      return "Unknown weather";
    }
  };

  const weatherDataMatcher = (timeToFind, weatherDataArray) => {
    const hourlyTimeList = state.weather.hourly.time;
    const index = hourlyTimeList.indexOf(timeToFind);

    return weatherDataArray[index];
  };

  const getApparentTemperature = () => {
    return state.weather.current_weather.apparentTemperature;
  };

  const currentTime = state.weather.current_weather.time;
  const temperature = state.weather.current_weather.temperature;
  const TemperatureUnits = state.weather.hourly_units.temperature_2m;
  const weathercode = state.weather.current_weather.weathercode;
  const weatherCondition = getWeatherCondition(weathercode);
  const apparentTemperature = getApparentTemperature();
  const windspeed = state.weather.current_weather.windspeed;
  const windspeedUnit = state.weather.hourly_units.windspeed_10m;
  const windDirection = state.weather.current_weather.winddirection;
  const humidityPerHourList = state.weather.hourly.relativehumidity_2m;
  const humidity = weatherDataMatcher(currentTime, humidityPerHourList);
  const humidityUnit = state.weather.hourly_units.relativehumidity_2m;
  const visibilityPerHourList = state.weather.hourly.visibility;
  const visibility = weatherDataMatcher(currentTime, visibilityPerHourList);
  const visibilityUnit = state.weather.hourly_units.visibility;
  const pressurePerHourList = state.weather.hourly.surface_pressure;
  const pressure = weatherDataMatcher(currentTime, pressurePerHourList);
  const pressureUnit = state.weather.hourly_units.surface_pressure;
  const dewpointPerHourList = state.weather.hourly.dewpoint_2m;
  const dewpoint = weatherDataMatcher(currentTime, dewpointPerHourList);
  const dewpointUnit = state.weather.hourly_units.dewpoint_2m;

  const infoMessages = {
    wind: "La velocidad y dirección del aire en un lugar específico. Indica la fuerza y dirección del flujo de aire y puede influir en la sensación térmica y las condiciones climáticas.",

    humidity:
      "La cantidad de vapor de agua presente en el aire. Una alta humedad puede hacer que el ambiente se sienta más caluroso y sofocante, mientras que una baja humedad puede causar sequedad en la piel y las vías respiratorias.",

    visibility:
      "La distancia hasta la cual se puede ver claramente en la atmósfera. Una baja visibilidad, como en la niebla o la niebla densa, puede afectar la conducción y las operaciones aéreas.",

    pressure:
      "La fuerza ejercida por la atmósfera sobre la superficie terrestre. Se utiliza para predecir cambios en el clima, ya que las áreas de alta y baja presión están asociadas con diferentes condiciones meteorológicas.",

    dewPoint:
      "La temperatura a la que el aire se satura y comienza a formar rocío. Indica qué tan cerca estamos del punto de saturación y puede afectar la sensación de calor o frío.",

    uvIndex:
      "Una medida de la intensidad de la radiación ultravioleta del sol que alcanza la superficie de la Tierra. Es importante para saber cuánta protección solar se necesita para evitar daños en la piel.",
  };

  const weatherConditionMessage = () => {
    return "Future condition message";
  };

  return (
    <div className={`${styles.currentWeatherCard} ${styles[state.themeMode]}`}>
      <div>
        <p>{state.weather.current_weather.time}</p>
        <p>Current weather</p>
      </div>
      <div>
        <img src="/svg/weatherImages/cloudy.svg" alt="cloud" />
        <div>
          <p>{temperature}</p>
          <p>{TemperatureUnits}</p>
        </div>
        <div>
          <p>{weatherCondition}</p>
          <p>{apparentTemperature}°</p>
        </div>
      </div>
      <div>
        <p>Min temperature will be {minTemperature}°.</p>
      </div>
      <div className={`${styles.currentWeatherDetailsContainer}`}>
        <CurrentWeatherDetails
          weatherElementTitle="Wind"
          icon={<GiWindsock />}
          value={windspeed}
          unit={windspeedUnit}
          windDirection={windDirection}
          infoMessage={infoMessages.wind}
        />
        <CurrentWeatherDetails
          weatherElementTitle={"Humidity"}
          icon={<BsDropletHalf />}
          value={humidity}
          unit={humidityUnit}
          infoMessage={infoMessages.humidity}
        />
        <CurrentWeatherDetails
          weatherElementTitle={"Visibility"}
          icon={<GiBinoculars />}
          value={visibility}
          unit={visibilityUnit}
          infoMessage={infoMessages.visibility}
        />
        <CurrentWeatherDetails
          weatherElementTitle={"Pressure"}
          icon={<WiBarometer />}
          value={pressure}
          unit={pressureUnit}
          infoMessage={infoMessages.pressure}
        />
        <CurrentWeatherDetails
          weatherElementTitle={"Dew Point"}
          icon={<MdDewPoint />}
          value={dewpoint}
          unit={dewpointUnit}
          infoMessage={infoMessages.dewPoint}
        />
      </div>
    </div>
  );
};

export default CurrentWeatherCard;
