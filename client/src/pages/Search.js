import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Banner from "../components/Banner";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";
import Card from "../components/Card";

export default function Search() {
  const [searchResult, setSearchResult] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const bookSearch = search
    API.booksSearch(bookSearch).then((response) => {
      setSearchResult(response.data);
    });
  }, [search]);

  const handleInputChange = event => {
    const { value } = event.target;
    setSearch(value);
  };

  function handleBookSave(event) {
    event.preventDefault();
    API.newSavedBook({
      title: event.target.getAttribute('data-title'),
      authors: event.target.getAttribute('data-authors'),
      description: event.target.getAttribute('data-description'),
      image: event.target.getAttribute('data-image'),
      link: event.target.getAttribute('data-link'),
      googleId: event.target.getAttribute('data-key'),
    })
      .then(
      )
      .catch((err) => console.log(err));
  }

  return (
    <div>
      <Container>
        <Banner />
        <SearchForm handleInputChange={handleInputChange} search={search} />
        <SearchResults>
          {searchResult.map((book) => (
            <Card key={book.googleId} {...book} handleBookSave={handleBookSave} />
          ))}
        </SearchResults>
      </Container>
    </div>
  );
}
