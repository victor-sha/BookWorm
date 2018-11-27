import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import Authors from "./Authors";
import Author from "./Author";
import Books from "./Books";
import Book from "./Book";
import { PageContainer } from "../components";

const Home = () => <div>HEllo</div>;

export default function Pages() {
  return (
    <Router history={history}>
      <PageContainer>
        <Route exact path="/" component={Home} />
        <Route exact path="/books/:id" component={Book} />
        <Route exact path="/books" component={Books} />
        <Route path="/authors/:id" component={Author} />
        <Route exact path="/authors" component={Authors} />
      </PageContainer>
    </Router>
  );
}
