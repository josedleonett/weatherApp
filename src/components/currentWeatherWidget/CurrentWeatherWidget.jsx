import { GiWindsock } from "react-icons/gi"; 
import React, { useContext } from 'react'
import CurrentWeatherDetails from '../currentWeatherDetails/CurrentWeatherDetails';
import { ContextGlobal } from "../../utils/global.context";

const CurrentWeatherWidget = ({
  minTemperature,
  wind
}) => {
  const { state } = useContext(ContextGlobal);

  const temperature = state.weather.current_weather.temperature;
  const TemperatureUnits = state.weather.hourly_units.temperature_2m;
  const weatherCondition = () => {
    const WMOCode = state.current_weather.weathercode;
    switch (WMOCode) {
      case 0:
        return "Clear sky";
      case 1:
        return "Mainly clear";
      case 2:
        return "Partly cloudy";
      case 3:
        return "Overcast";
      case 1:
        return "Fog";
      case 1:
        return "Rime fog";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
      case 1:
        return "Mainly clear";
    
      default:
        break;
    }
  }
  const apparentTemperature = () => {
    state.weather.current_weather.apparentTemperature;
  };


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
          <p>{weatherCondition()}</p>
          <p>{apparentTemperature}°</p>
        </div>
      </div>
      <div>
        <p>
          {weatherConditionMessage()}. Min temperature will be {minTemperature}
          °.
        </p>
      </div>
      <div>
        <CurrentWeatherDetails icon={<GiWindsock />}  />
      </div>
    </>
  );
};

export default CurrentWeatherWidget