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
      window.scrollY > 250
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
      </HeaderWrap>
    );
  }
}

export default injectIntl(Header);

const HeaderWrap = styled.header`
  align-items: center;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 24px;
  padding-top: 24px;
  position: sticky;
  top: 0;
  transition: 0.2s padding ease-out;
  z-index: 1;
`;

const Title = styled.span`
  animation: dotBricks 5s infinite ease;
  border-radius: 4px;
  display: block;
  font-size: 24px;
  height: 8px;
  left: -9999px;
  padding: 1px;
  position: relative;
  top: 8px;
  width: 8px;
`;

const AlignCenter = styled.div`
  align-items: center;
  display: flex;
`;

const DarkMode = styled.img`
  cursor:pointer;
  height: 22px;
  margin-left: 8px;
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
  margin: 0 12px;
  opacity: 0.5;
  padding: 12px 0;

  @media (min-width: 1024px) {
    padding-left: 8px;
    padding-right: 8px;
  }
`;