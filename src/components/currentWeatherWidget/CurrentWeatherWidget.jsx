import { MdDewPoint } from "react-icons/md"; 
import { WiBarometer } from "react-icons/wi"; 
import { GiBinoculars } from "react-icons/gi"; 
import { BsDropletHalf } from "react-icons/bs"; 
import { GiWindsock } from "react-icons/gi"; 
import React, { useContext } from 'react'
import CurrentWeatherDetails from '../currentWeatherDetails/CurrentWeatherDetails';
import { ContextGlobal } from "../../utils/global.context";

const CurrentWeatherWidget = ({
  minTemperature,
  wind
}) => {
  const { state } = useContext(ContextGlobal);


    const getWeatherCondition = (wmoCode) => {
    const weatherCodeMapping = state.weatherCodeMapping;
    if (wmoCode in weatherCodeMapping) {
      return state.weatherCodeMapping[wmoCode].weatherCondition;
    } else {
      return "Unknown weather";
    }
  };

  const getApparentTemperature = () => {
    return state.weather.current_weather.apparentTemperature;
  };

  const temperature = state.weather.current_weather.temperature;
  const TemperatureUnits = state.weather.hourly_units.temperature_2m;
  const weathercode = state.weather.current_weather.weathercode;
  const weatherCondition = getWeatherCondition(weathercode);
  const apparentTemperature = getApparentTemperature();
  const windspeed = state.weather.current_weather.windspeed;
  const windspeedUnit = state.weather.hourly_units.windspeed_10m;
  const windDirection = state.weather.current_weather.winddirection;


  const weatherConditionMessage = () => {
    return "Future condition message"
  }

  return (
    <>
      <div>
        <p>El tiempo actual</p>
        <p>{state.weather.current_weather.time}</p>
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
      <div>
        <CurrentWeatherDetails
          weatherElementTitle="Wind"
          icon={<GiWindsock />}
          value={windspeed}
          unit={windspeedUnit}
          windDirection={windDirection}
        />
        <CurrentWeatherDetails
          weatherElementTitle={"Humidity "}
          icon={<BsDropletHalf />}
          value={"falta agregar humedad"}
        />
        <CurrentWeatherDetails
          weatherElementTitle={"Visibility"}
          icon={<GiBinoculars />}
        />
        <CurrentWeatherDetails
          weatherElementTitle={"Presure"}
          icon={<WiBarometer />}
        />
        <CurrentWeatherDetails
          weatherElementTitle={"Dew Point"}
          icon={<MdDewPoint />}
        />
      </div>
    </>
  );
};

export default CurrentWeatherWidget