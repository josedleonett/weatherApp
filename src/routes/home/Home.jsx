import { useState, useEffect } from "react";
import CurrentWeatherWidget from "../../components/currentWeatherWidget/CurrentWeatherWidget";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [weather, setWeather] = useState({});
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const lat = params.get("lat");
  const lon = params.get("lon");

  const getWeatherData = async () => {
    const response = await fetch(
      `https:api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&hourly=temperature_2m&current_weather=true&timezone=auto`
    );
    const data = await response.json();
    setWeather(data);
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
      <CurrentWeatherWidget time={weather.current_weather.time}/>
    </div>
  );
};

export default Home;
