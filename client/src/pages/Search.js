import React, { useEffect, useState } from "react";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import Banner from "../components/Banner";
import SearchResults from "../components/SearchResults";
import API from "../utils/API";

export default function Search() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const search = "harry potter";
    API.booksSearch(search).then((response) => {
      setSearchResult(response.data);
    });
  }, []);
  console.log(searchResult);

  return (
    <div>
      <Container>
        <Banner />
        <SearchForm />
        <SearchResults></SearchResults>
      </Container>
    </div>
  );
}
