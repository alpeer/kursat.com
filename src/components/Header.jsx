import React, { Component } from "react"
import { NavLink, Link } from "react-router-dom"

import { HeaderWrap, HeaderFlex, HeaderBrand, HeaderNav, HeaderNavWrap, Button, DarkMode } from "./../utility/styled"
import darkModeOn from "./../utility/darkModeOn.svg"
import darkModeOff from "./../utility/darkModeOff.svg"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isDarkMode: false
    }

    this.changeDarkMode = this.changeDarkMode.bind(this)
  }

  componentDidMount() {
    const html = document.getElementsByTagName("html")[0],
          header = document.getElementsByTagName("header")[0]

    html.getAttribute("data-theme") === "dark"
    ? this.setState(() => ({ isDarkMode: true }))
    : this.setState(() => ({ isDarkMode: false }))

    window.addEventListener("scroll", () => {
      window.scrollY >= 70
        ? header.classList.add("active")
        : header.classList.remove("active")
   })
  }

  changeDarkMode() {
    this.setState(state => ({
      isDarkMode: !state.isDarkMode
    }))

    const html = document.getElementsByTagName("html")[0]
    const {isDarkMode} = this.state

    isDarkMode
    ? html.removeAttribute("data-theme", "dark")
    : html.setAttribute("data-theme", "dark")
  }

  render () {
    const { isDarkMode } = this.state

    let nav = links.map(({link, text}, i) =>
      <NavLink to={link} exact key={i}>
        {text}
      </NavLink>
    )

    return (
      <HeaderWrap>
        <HeaderFlex>
          <Link to="/" exact="true">
            <HeaderBrand>...</HeaderBrand>
          </Link>

          <HeaderNavWrap>
            <HeaderNav>
              {nav}
            </HeaderNav>

            <Button onClick={this.changeDarkMode}>
              {
                !isDarkMode
                ? <DarkMode src={darkModeOn} />
                : <DarkMode src={darkModeOff} />
              }
            </Button>
          </HeaderNavWrap>
        </HeaderFlex>
      </HeaderWrap>
    )
  }
}

export const links = [
  {
    text: "Ana Sayfa",
    link: "/"
  },
  {
    text: "Blog",
    link: "/blog"
  },
  {
    text: "Kişisel",
    link: "/personel"
  },
  {
    text: "Hakkında",
    link: "/about"
  }
]

export default Header