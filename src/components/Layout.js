import React from "react";
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./Header"
import Footer from "./Footer"

import "./layout.css"

const Layout = ({ children }) => (
  <>
    <Header />

    <Main>
      { children }
    </Main>

    <Footer />
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout

const Main = styled.main`
  margin-bottom: 160px;
  margin-top: 7%;

  section {
    margin-left: auto;
    margin-right: auto;
    max-width: 80%;
    position: relative;

    @media (min-width: 768px) {
      max-width: 540px;
    }
    
    @media (min-width: 992px) {
      max-width: 720px;
    }
    
    @media (min-width: 1400px) {
      max-width: 1140px;
    }
  }
`