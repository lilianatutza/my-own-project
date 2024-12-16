

import React from "react";
import MyBooks from "./books";

export default function Form() {
  return (
    <form className="Form">
      <label> Reading order: </label>
      <select onChange={(e) => window.open(e.target.value, "_blank")}>
        <option value="" selected disabled>
          Select
        </option>
        {MyBooks.map((book, index) => (
          <option key={index} value={book.url}>
            {book.title}
          </option>
        ))}
      </select>
    </form>
  );
}