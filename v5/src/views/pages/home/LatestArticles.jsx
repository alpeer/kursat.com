import React, {Component} from "react";
import {injectIntl, defineMessages} from "react-intl";
import Jumbotron from "./../../layout/Jumbotron";

const messages = defineMessages({
  latestArticles    : { id: "latestArticles" },
  viewAll           : { id: "viewAll" },  
  newBadge          : { id: "newBadge" }
})

class LatestArticles extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      content: [
        {
          "img": "https://omergulcicek.com/img/javascript.png",
          "title": "Kişisel Web Sitesi",
          "date": "11/24/2019",
          "link": "blog/kişisel-web-sitesi"
        },
        {
          "img": "https://omergulcicek.com/img/css.png",
          "title": "2019 Değerlendirmesi — İlk 6 Ay",
          "date": "11/23/2019",
          "link": "blog/2019-değerlendirmesi-i̇lk-6-ay"
        },
        {
          "img": "https://omergulcicek.com/img/react.png",
          "title": "Günümüz Türkiye’si",
          "date": "10/29/2019",
          "link": "blog/günümüz-türkiyesi"
        },
        {
          "img": "https://omergulcicek.com/img/es6.png",
          "title": "2018'in Ardından",
          "date": "10/25/2019",
          "link": "blog/2018in-ardından"
        },
        {
          "img": "https://omergulcicek.com/img/react.png",
          "title": "JSX Nedir?",
          "date": "8/5/2019",
          "link": "blog/jsx-nedir"
        },
        {
          "img": "https://omergulcicek.com/img/redux.png",
          "title": "The Imitation Game",
          "date": "11/20/2017",
          "link": "blog/the-imitation-game"
        }
      ]
    };
  }

  render() {
    const {intl:{formatMessage}} = this.props;
    const {content} = this.state;
    const newBadge = formatMessage(messages.newBadge);
    
    return (
      <Jumbotron
        title={formatMessage(messages.latestArticles)}
        content={content}
        viewAll={formatMessage(messages.viewAll)}
        viewAllLink="/blog"
        newBadge={newBadge}
      />
    );
  }
}

export default injectIntl(LatestArticles);