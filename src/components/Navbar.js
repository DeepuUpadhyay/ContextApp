import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { AuthContext } from "./contexts/AuthContext";

const Navbar = props => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { isAuthenticated, toggleAuth } = useContext(AuthContext);
  const theme = isLightTheme ? light : dark;
  return (
             <div style={{ background: theme.ui, color: theme.syntax }}>
              <nav>
                <h1>Context App</h1>
                <div onClick={toggleAuth}>
                {isAuthenticated?'loggedIn':'logout'}
                </div>
                <ul>
                  <li>Home</li>
                  <li>About</li>
                  <li>Contact</li>
                </ul>
              </nav>
            </div>
  );
};

export default Navbar;
