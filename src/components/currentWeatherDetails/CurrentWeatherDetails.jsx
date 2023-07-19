import { BsInfoCircle } from "react-icons/bs";
import { WiWindDeg } from "react-icons/wi";
import React from "react";
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
        {icon} {weatherElementTitle} <BsInfoCircle />
      </p>
      <div>
        <p>
          {value} {unit}
        </p>
        {windDirection && (
          <WiWindDeg transform={`rotate(${windDirection + 180})`} />
        )}
      </div>
    </div>
  );
};

export default CurrentWeatherDetails;