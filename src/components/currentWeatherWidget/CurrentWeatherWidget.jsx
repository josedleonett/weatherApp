import React from 'react'

const CurrentWeatherWidget = ({time}) => {
  return (
    <>
      <div>
        <p>El tiempo actual</p>
        <p>{time}</p>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </>
  );
}

export default CurrentWeatherWidget