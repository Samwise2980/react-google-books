import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <table className="table">
      <thead>
        <tr className="text-center">
          <th scope="col"></th>
          <th scope="col">
            <h4>Name{" "}</h4>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => props.sortCharacters("ascending", "name")}
                type="button"
                className="btn btn-secondary"
              >
                ascending
              </button>
              <button
                onClick={() => props.sortCharacters("descending", "name")}
                type="button"
                className="btn btn-secondary"
              >
                descending
              </button>
            </div>
          </th>
          <th scope="col">
          <h4>Phone{" "}</h4>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => props.sortCharacters("ascending", "phone")}
                type="button"
                className="btn btn-secondary"
              >
                ascending
              </button>
              <button
                onClick={() => props.sortCharacters("descending", "phone")}
                type="button"
                className="btn btn-secondary"
              >
                descending
              </button>
            </div>
          </th>
          <th scope="col">
          <h4>Email{" "}</h4>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => props.sortCharacters("ascending", "email")}
                type="button"
                className="btn btn-secondary"
              >
                ascending
              </button>
              <button
                onClick={() => props.sortCharacters("descending", "email")}
                type="button"
                className="btn btn-secondary"
              >
                descending
              </button>
            </div>
          </th>
          <th scope="col">
          <h4>DOB{" "}</h4>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button
                onClick={() => props.sortCharacters("ascending", "date")}
                type="button"
                className="btn btn-secondary"
              >
                ascending
              </button>
              <button
                onClick={() => props.sortCharacters("descending", "date")}
                type="button"
                className="btn btn-secondary"
              >
                descending
              </button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default SearchResults;
