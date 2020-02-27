import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { AuthContext } from "./contexts/AuthContext";

const Navbar = props => {
  const authContext = useContext(AuthContext);
  const contextType = useContext(ThemeContext);

  const { isLightTheme, light, dark } = contextType;
  const { isAuthenticated, toggleAuth } = authContext;
  const theme = isLightTheme ? light : dark;

  return (
    <AuthContext.Consumer>
      {authContext => (
        <ThemeContext.Consumer>
          {contextType => (
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
          )}
        </ThemeContext.Consumer>
      )}
    </AuthContext.Consumer>
  );
};

export default Navbar;
