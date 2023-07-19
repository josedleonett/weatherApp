import { WiWindDeg } from "react-icons/wi";
import { FaInfoCircle } from "react-icons/fa";
import React from 'react'
import style from "./CurrentWeatherDetails.module.css";

const CurrentWeatherDetails = ({
  weatherElementTitle,
  value,
  unit,
  infoMessage,
  windDirection,
  icon,
}) => {
  return (
    <div className={style}>
      <p>
        {icon} {weatherElementTitle} <FaInfoCircle />
      </p>
      <div>
        <p>
          {value} {unit}
        </p>
        {windDirection && (
          <WiWindDeg transform={`rotate(${windDirection})`} />
        )}
      </div>
    </div>
  );
};

export default CurrentWeatherDetails;

