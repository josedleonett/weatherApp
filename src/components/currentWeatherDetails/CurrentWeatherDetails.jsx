import { WiWindDeg } from "react-icons/wi"; 
import { FaInfoCircle } from "react-icons/fa"; 
import React from 'react'

const CurrentWeatherDetails = ({
  weatherElementTitle,
  value,
  unit,
  infoMessage,
  windDirection,
  icon,
}) => {
  return (
    <div>
      {icon}
      <p>
        {weatherElementTitle} <FaInfoCircle />
      </p>
      <div>
        <p>
          {value} {unit}
        </p>
        {windDirection && <WiWindDeg rotate={windDirection} />}
      </div>
    </div>
  );
};

export default CurrentWeatherDetails