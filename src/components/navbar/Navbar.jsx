import React, { useContext, useEffect } from "react";
import { ContextGlobal } from "../../utils/global.context";
import styles from "./Navbar.module.css";
import { TbReload } from "react-icons/tb";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import SearchInput from "../searchInput/SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
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
    <nav className={`${styles.navbar} ${styles[state.themeMode]}`}>
      <ul>
        <li>
          <Link to="/location/">Inicio</Link>
        </li>
        <li>
          <Link>Favoritos</Link>
        </li>
        <li>
          <Link>Detalles</Link>
        </li>
      </ul>
      <SearchInput />
      <div className={`${styles.buttonContainer}`}>
        <button>
          <TbReload />
        </button>
        <button onClick={handleThemeModeChange}>
          {state.themeMode == "light" ? <MdDarkMode /> : <MdLightMode />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
