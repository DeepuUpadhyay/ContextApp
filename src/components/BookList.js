import React, { useContext } from "react";
import { ThemeContext } from "./contexts/ThemeContext";
import { BookContext } from "./contexts/BookContext";

const BookList = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLightTheme ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map(books => {
          return <li style={{ background: theme.ui }} key={books.id}>{books.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default BookList;
