import React from "react";
import "./style.css";

function SearchForm(props) {
  return (
    <form className="search">
      <div className="form-group">
        <label htmlFor="language">Search Term:</label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="Search"
          type="text"
          className="form-control"
          placeholder="Type a book to search"
          id="Search"
        />
      </div>
    </form>
  );
}

export default SearchForm;
