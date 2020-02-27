import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = props => {
  const [state, setState] = useState({
    isLightTheme: true,
    light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
    dark: { syntax: "#ddd", ui: "#333", bg: "#555" }
  });
const toggleTheme=()=>{
     const isLightTheme = state.isLightTheme;
    setState(state=>({...state, isLightTheme: !isLightTheme }));
}
  return (
    <ThemeContext.Provider value={{ ...state,toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
