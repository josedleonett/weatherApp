import { TbReload } from "react-icons/tb";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import React, { useContext, useEffect } from "react";
import SearchInput from "../searchInput/SearchInput";
import Navbar from "../navbar/Navbar";
import { ContextGlobal } from "../../utils/global.context";
import styles from "./Searchbar.module.css";

const Searchbar = () => {
  const { state, dispatch, changeThemeColor } = useContext(ContextGlobal);

  const handleThemeModeChange = () => {
    const newTheme = state.themeMode === "light" ? "dark" : "light";
    dispatch({ type: "SET_THEME_MODE", payload: newTheme });
  };

  const handlerThemeColorChange = (event) => {
    const themeColorIndex = parseInt(event.target.value);
    dispatch({ type: "SET_THEME_COLOR", payload: themeColorIndex });
  };

  useEffect(() => {
    changeThemeColor(state.themeColor);
  }, [state.themeColor]);

  return (
    <div className={`${styles.searchbar}`}>
      <Navbar />
      <SearchInput />
      <button>
        <TbReload />
      </button>
      <button onClick={handleThemeModeChange}>
        <MdLightMode />
        <MdDarkMode />
      </button>
    </div>
  );
};

export default Searchbar;
