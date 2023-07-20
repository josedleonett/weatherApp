import React, { useContext, useState } from "react";
import { ContextGlobal } from "../../utils/global.context";
import PropTypes from "prop-types";
import styles from "./CurrentWeatherDetails.module.css";
import { BsInfoCircle } from "react-icons/bs";
import { WiWindDeg } from "react-icons/wi";

const CurrentWeatherDetails = ({
  weatherElementTitle,
  value,
  unit,
  infoMessage,
  windDirection,
  icon,
}) => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`${styles.container} ${styles[state.theme]}`}>
      <div className={`${styles.title}`}>
        {icon}
        <p>{weatherElementTitle}</p>
        <BsInfoCircle />
      </div>

      <div className={`${styles.value}`}>
        <p>
          {value}{unit}
        </p>
        {windDirection && (
          <WiWindDeg transform={`rotate(${windDirection + 180})`} />
        )}
      </div>
    </div>
  );
};

CurrentWeatherDetails.propTypes = {
  weatherElementTitle: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  infoMessage: PropTypes.string,
  windDirection: PropTypes.number,
  icon: PropTypes.element,
};

export default CurrentWeatherDetails;
