import React, {Component} from "react";
import {injectIntl, defineMessages} from "react-intl";
import Jumbotron from "./../../layout/Jumbotron";

const messages = defineMessages({
  openSourceProjects: { id: "openSourceProjects" },
  viewAll           : { id: "viewAll" },  
  new               : { id: "new" }
})

class OpenSourceProjects extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      content: [
        {
          "img": "https://omergulcicek.com/public/favicon.png",
          "title": "omergulcicek.com",
          "description": "Kişisel sitemin kaynak kodları",
          "link": "https://github.com/omergulcicek/omergulcicek.com"
        },
        {
          "img": "https://omergulcicek.com/img/turkuazcss.png",
          "title": "Turkuaz",
          "description": "Daha hızlı ve kolay web sayfaları geliştirmek için tasarlanan güçlü bir Framework",
          "link": "https://github.com/omergulcicek/turkuaz"
        },
        {
          "img": "https://omergulcicek.com/img/turkcedokuman.png",
          "title": "Türkçe Doküman",
          "description": "Yazılım alanında Türkçe dokümanların toplanma projesi",
          "link": "https://github.com/omergulcicek/turkce-dokuman"
        }
      ]
    };
  }

  render() {
    const {intl:{formatMessage}} = this.props;
    const {content} = this.state;
    
    return (
      <Jumbotron
        title={formatMessage(messages.openSourceProjects)}
        content={content}
        viewAll={formatMessage(messages.viewAll)}
        viewAllLink="/projects"
        newBadge={formatMessage(messages.new)}
      />
    );
  }
}

export default injectIntl(OpenSourceProjects);