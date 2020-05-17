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
          name="term"
          type="text"
          className="form-control"
          placeholder="Type a name, phone number, email, or date of birth"
          id="term"
        />
      </div>
    </form>
  );
}

export default SearchForm;
