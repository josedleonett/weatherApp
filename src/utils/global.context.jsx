import React, { createContext, useMemo, useReducer } from "react";
import { paletteList } from "./paletteList";
import { weatherCodeMapping } from "./weatherCodeMapping";

const getStoredThemeMode = () => {
  return localStorage.getItem("theme");
};

const getStoredThemeColor = () => {
  const storedColor = localStorage.getItem("selectedThemeColor");
  return storedColor ? JSON.parse(storedColor) : null;
};

export const initialState = {
  location: { lat: "", lon: "" },
  weather: {},
  favoritesLocations: [],
  themeMode: getStoredThemeMode() || "light",
  themeColor: getStoredThemeColor() || paletteList[0],
  weatherCodeMapping: weatherCodeMapping,
};

export const changeThemeColor = (newThemeColor) => {
  const root = document.documentElement;

  if (newThemeColor) {
    Object.entries(newThemeColor).forEach(([key, value]) => {
      if (key.startsWith("--")) {
        root.style.setProperty(key, value);
      }
    });
  }
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOCATION":
      return { ...state, Location: action.payload };
      
    case "SET_WEATHER":
      return { ...state, weather: action.payload };

    // case "SET_THEME_MODE":
    //   localStorage.setItem("themeMode", action.payload);
    //   return { ...state, themeMode: action.payload };

    // case "SET_THEME_COLOR":
    //   const selectedThemeColor = state.themeColor.find(
    //     (color) => color.index === action.payload
    //   );
    //   if (selectedThemeColor) {
    //     localStorage.setItem(
    //       "themeColor",
    //       JSON.stringify(selectedThemeColor)
    //     );
    //     changeThemeColor(selectedThemeColor);
    //     return { ...state, selectedThemeColor };
    //   }
    //   return state;

    // case "ADD_FAVORITE":
    //   const updatedFavorites = [...state.dentistFavorites, action.payload];
    //   localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    //   return { ...state, dentistFavorites: updatedFavorites };

    // case "REMOVE_FAVORITE":
    //   const filteredFavorites = state.dentistFavorites.filter(
    //     (dentist) => dentist.id !== action.payload
    //   );
    //   localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
    //   return { ...state, dentistFavorites: filteredFavorites };

    default:
      return state;
  }
};

export const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(() => {
    return { state, dispatch, changeThemeColor };
  }, [state]);

  return (
    <ContextGlobal.Provider value={contextValue}>
      {children}
    </ContextGlobal.Provider>
  );
};
