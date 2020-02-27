import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";

const BookList = () => {
    const contextType = useContext(ThemeContext);
    const {isLightTheme,light,dark}= contextType;
    const theme = isLightTheme?light:dark;
    console.log(theme);
  return (
    <div className="book-list" style={{color:theme.syntax,background:theme.bg}}>
      <ul>
        <li style={{background:theme.ui}}>the way of kings</li>
        <li style={{background:theme.ui}}>the name of the wind</li>
        <li style={{background:theme.ui}}>the final empire</li>
      </ul>
    </div>
  );
};

export default BookList;
