import React from 'react'
import { Link } from "react-router-dom";

const TabButton = ({id, locationName, icon, temperature}) => {
  return (
    <div>
      <Link to={`/location/${id}`}>
        <p>Holas</p>
      </Link>
    </div>
  );
}

export default TabButton