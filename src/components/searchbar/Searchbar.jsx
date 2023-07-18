import { TbReload } from "react-icons/tb"; 
import { MdDarkMode } from "react-icons/md"; 
import { MdLightMode } from "react-icons/md";
import React from 'react'
import SearchInput from '../searchInput/SearchInput';
import Navbar from "../navbar/Navbar";


const Searchbar = () => {
  return (
    <div>
      <p>Pronostico</p>
      <Navbar />
      <SearchInput />
      <button>
        <TbReload />
      </button>
      <button>
        <MdLightMode />
        <MdDarkMode />
      </button>
    </div>
  );
}

export default Searchbar