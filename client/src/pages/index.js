import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {} from "@reach/router";
import Authors from "./Authors";
import { PageContainer } from "../components";

const Home = () => <div>HEllo</div>;
const Books = () => <div>Books</div>;

export default function Pages() {
  return (
    <Router>
      <PageContainer>
        <Route exact path="/" component={Home} />
        <Route path="/books" component={Books} />
        <Route path="/authors" component={Authors} />
      </PageContainer>
    </Router>
  );
}
