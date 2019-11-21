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
          </Switch>
      </Main>

      <Footer />
    </Router>
  );
}

const Main = styled.main`
  margin-bottom: 40px;
  margin-top: 32px;
  @media (min-width: 1024px) {
    margin-bottom: 160px;
    margin-top: 120px;
  }
`;


