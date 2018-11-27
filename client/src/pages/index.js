import React from "react";
import { Router, Route } from "react-router-dom";
import history from "../history";
import Authors from "./Authors";
import AuthorCard from "./AuthorCard";
import { PageContainer } from "../components";

const Home = () => <div>HEllo</div>;
const Books = () => <div>Books</div>;

export default function Pages() {
  return (
    <Router history={history}>
      <PageContainer>
        <Route exact path="/" component={Home} />
        <Route exact path="/books" component={Books} />
        <Route path="/authors/:id" component={AuthorCard} />
        <Route exact path="/authors" component={Authors} />
      </PageContainer>
    </Router>
  );
}
