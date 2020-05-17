import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import API from "./utils/API";

function App() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {
    const search = "harry potter";
    API.booksSearch(search).then((response) => {
      setSearchResult(response.data);
    });
  }, []);
  console.log(searchResult);
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
          <Route path="*">
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
