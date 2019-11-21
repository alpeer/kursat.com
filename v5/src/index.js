import React, {Component} from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from "react-intl";
import translations from "./i18n/locales";
import App from "./App";

import "./static/css/index.css";

export default class OmerGulcicek extends Component {
  render() {
    const locale = window.location.search.replace("?lang=","") || "tr"
    const messages = translations[locale];

    return (
      <IntlProvider locale={locale} key={locale} messages={messages}>
        <App />
      </IntlProvider>
    );
  }
}

ReactDOM.render(<OmerGulcicek />, document.getElementById("root"));