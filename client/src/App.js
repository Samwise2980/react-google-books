import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./components/Navbar";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

import "./App.css";

function App() {
  document.title = "Google Books Search";
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/">
            <Search />
          </Route>
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
