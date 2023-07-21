import React, { useContext } from "react";
import TabButton from "../tabButton/TabButton";
import styles from "./Tabs.module.css";
import { ContextGlobal } from "../../utils/global.context";

const Tabs = () => {
  const { state } = useContext(ContextGlobal);
  const prueba = "1";
  return (
    <nav className={`${styles.tabs} ${styles[state.themeMode]}`}>
      <ul>
        <li>
          <TabButton id={"1"} />
          <p>hola</p>
        </li>
      </ul>
    </nav>
  );
};

export default Tabs;
