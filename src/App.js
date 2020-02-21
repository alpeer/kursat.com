import React from "react"
import {
  BrowserRouter as Router, 
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import { Layout } from "./components"
import { Home, Blog, BlogDetail, Personel, About, Error } from "./pages"

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/blog">
            <Blog />
          </Route>

          <Route path="/personel">
            <Personel />
          </Route>

          <Route path="/about">
            <About />
          </Route>

          <Route path="/cv">
            <Redirect to="/cv.pdf" />
          </Route>

          <Route path="/404">
            <Error />
          </Route>

          <Route path="/:path" component={BlogDetail} />
          {
            /* Blog detay sayfasında makale ile eşleşilmezse error sayfası import edilecek */
          }
        </Switch>
      </Layout>
    </Router>
  )
}

export default App