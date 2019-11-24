import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from "styled-components";

import ScrollToTop from "./ScrollToTop";
import Header from "./views/layout/Header";
import Footer from "./views/layout/Footer";
import Home from "./views/pages/home/Home";
import Blog from "./views/pages/blog/Articles";
import BlogDetail from "./views/pages/blog/ArticlesDetail";
import Projects from "./views/pages/projects/Projects";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />

      <Main>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/blog" exact component={Blog} />
            <Route path="/blog/:article" component={BlogDetail} />
            <Route path="/projects" exact component={Projects} />
          </Switch>
      </Main>

      <Footer />
    </Router>
  );
}

const Main = styled.main`
  margin: 2rem auto 2.5rem;
  max-width: 80%;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media (min-width: 64rem) {
    margin: 7.5rem auto 10rem;
    max-width: 50rem;
  }
`;


