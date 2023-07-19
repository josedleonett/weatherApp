import { useState, useEffect, useContext } from "react";
import CurrentWeatherWidget from "../../components/currentWeatherWidget/CurrentWeatherWidget";
import { useLocation } from "react-router-dom";
import { ContextGlobal } from "../../utils/global.context";

//RECORDAR IMPLEMENTAR LOADER

const Home = () => {
  const { state, dispatch } = useContext(ContextGlobal);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lat = params.get("lat");
  const lon = params.get("lon");

  const getWeatherData = async () => {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m,relativehumidity_2m,dewpoint_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,weathercode,visibility,windspeed_10m,uv_index,uv_index_clear_sky,is_day&current_weather=true&timezone=auto`
    );
    const data = await response.json();
    dispatch({ type: "SET_WEATHER", payload: data });
    console.log(data);
  };

  useEffect(() => {
    if (lat && lon) {
      getWeatherData();
    }
  }, [lat && lon]);

  return (
    <div>
      <p>{lat}</p>
      <p>{lon}</p>
      {lat && lon && state.weather.current_weather?.time && (
        <CurrentWeatherWidget />
      )}
    </div>
  );
};

export default Home;

