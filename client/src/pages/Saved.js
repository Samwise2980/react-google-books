import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import Banner from "../components/Banner";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import SavedCard from "../components/Saved-Card";

export default function Saved() {
  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    API.getSavedBooks().then((response) => {
      setSavedBooks(response.data);
    });
  }, [savedBooks]);

  function deleteBook(event) {
    const id = event.target.getAttribute("data-id");
    API.deleteSavedBook(id)
      .then()
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Container>
        <Banner />
        <SearchResults>
          {savedBooks.length ? (
            <div>
              {savedBooks.map((book) => (
                <SavedCard key={book._id} {...book} deleteBook={deleteBook} />
              ))}
            </div>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </SearchResults>
      </Container>
    </div>
  );
}
