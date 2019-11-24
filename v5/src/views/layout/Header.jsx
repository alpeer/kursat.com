import React, {Component} from "react";
import styled from "styled-components";
import {Link,NavLink} from "react-router-dom";
import {injectIntl, defineMessages} from "react-intl";
import darkModeOn from "../../static/svg/darkModeOn.svg";
import darkModeOff from "../../static/svg/darkModeOff.svg";

import "./header.css"

const messages = defineMessages({
  home:     { id: "home" },
  article:  { id: "article" },
  projects: { id: "projects" },
  darkMode: { id: "darkMode" },
})

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDarkMode: false
    };

    this.changeDarkMode = this.changeDarkMode.bind(this);
  }

  componentDidMount() {
    const html = document.getElementsByTagName("html")[0],
          header = document.getElementsByTagName("header")[0],
          url = new URL(window.location.href),
          lang = url.searchParams.get("lang") || "tr";

    html.setAttribute("lang", lang);

    window.addEventListener("scroll", () => {
      window.scrollY >= 150
        ? header.classList.add("active")
        : header.classList.remove("active");
   });
  }

  changeDarkMode() {
    this.setState(state => ({
      isDarkMode: !state.isDarkMode
    }));

    const html = document.getElementsByTagName("html")[0];
    const {isDarkMode} = this.state;

    isDarkMode
    ? html.removeAttribute("data-theme", "dark")
    : html.setAttribute("data-theme", "dark");
  }

  render() {
    const {intl:{formatMessage}} = this.props;
    const {isDarkMode} = this.state;

    return (
      <HeaderWrap>
        <HeaderFlex>
          <Link to="/">
            <Title>...</Title>
          </Link>

          <AlignCenter>
            <nav>
              <NavLink to="/" exact>
                <Text>
                  {formatMessage(messages.home)}
                </Text>
              </NavLink>

              <NavLink to="/blog">
                <Text>
                  {formatMessage(messages.article)}
                </Text>
              </NavLink>

            <NavLink to="/projects">
              <Text>
                {formatMessage(messages.projects)}
              </Text>
            </NavLink>
            </nav>
            
            <div className="dark-mode">
              <Button onClick={this.changeDarkMode} title={formatMessage(messages.darkMode)}>
                {
                  !isDarkMode
                  ? <DarkMode src={darkModeOn} alt={formatMessage(messages.darkMode)}/>
                  : <DarkMode src={darkModeOff} alt={formatMessage(messages.darkMode)} />
                }
              </Button>
            </div>
          </AlignCenter>
        </HeaderFlex>
      </HeaderWrap>
    );
  }
}

export default injectIntl(Header);

const HeaderWrap = styled.header`
  background-color: #fff;
  padding-bottom: 1.5rem;
  padding-top: 1.5rem;
  position: sticky;
  top: 0;
  transition: 0.2s padding ease-out;
  z-index: 1;
`;

const HeaderFlex = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  margin: auto;
  max-width: 80%;

  @media (min-width: 64rem) {
    flex-direction: row;
    max-width: 50rem;
  }
`;

const Title = styled.span`
  animation: dotBricks 5s infinite ease;
  border-radius: 4px;
  display: none;
  font-size: 1.5rem;
  height: 8px;
  margin-bottom: 2rem;
  margin-left: .5rem;
  left: -9999px;
  padding: 1px;
  position: relative;
  top: 8px;
  width: 8px;

  @media (min-width: 64rem) {
    display: block;
    margin-bottom: 0;
  }
`;

const AlignCenter = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 64rem) {
    width: auto;
  }

  a {
    margin-right: 1.25rem;
  }
`;

const DarkMode = styled.img`
  cursor:pointer;
  height: 22px;
`;

const Button = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
  outline: none;
`;

const Text = styled.span`
  color: var(--text-color);
  display: inline-block;
  font-weight: bold;
  opacity: 0.5;
  padding: .75rem 0;

  @media (min-width: 64rem) {
    padding-left: .5rem;
    padding-right: .5rem;
  }
`;