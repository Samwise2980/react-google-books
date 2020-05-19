import React from "react";
import "./style.css";

function Card({ title, authors, description, image, link, deleteBook, _id }) {
  return (
    <div className="card mb-3">
      <div className="card-body">
        <button data-id={_id} type="button" onClick={deleteBook} className="btn mr-3">
          Delete
        </button>
        <a
          className="btn mr-3"
          href={link}
          role="button"
          rel="noopener noreferrer"
          target="_blank"
        >
          View
        </a>
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle">{authors}</h6>
        <hr />
        <img className="mb-3" src={image} alt="book cover" />
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default Card;
