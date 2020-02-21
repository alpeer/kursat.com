import React from "react"
import Header from "./Header"
import Footer from "./Footer"

import { Main } from "./../utility/styled"

const Layout = ({content}) => {
  return (
    <>
      <Header />

      <Main>
        {content}
      </Main>
      
      <Footer />
    </>
  )
}

export default Layout