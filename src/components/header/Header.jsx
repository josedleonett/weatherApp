import React, { useContext } from "react";
import Searchbar from "../searchbar/Searchbar";
import Tabs from "../tabs/Tabs";
import { ContextGlobal } from "../../utils/global.context";
import styles from "./Header.module.css";
import Navbar from "../navbar/Navbar";

const Header = () => {
  const { state } = useContext(ContextGlobal);
  return (
    <div className={`${styles.header} ${styles[state.themeMode]}`}>
      <Navbar />
      <Tabs />
    </div>
  );
};

export default Header;
