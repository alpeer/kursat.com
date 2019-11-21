import React, {Component} from "react";
import {Link} from "react-router-dom";
import {injectIntl, defineMessages} from "react-intl";
import styled from "styled-components";

const messages = defineMessages({
  latestArticles    : { id: "latestArticles" },
  viewAll           : { id: "viewAll" },
  new               : { id: "new" }
})

class LatestArticles extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      articles: [
        {
          "img": "https://omergulcicek.com/img/javascript.png",
          "title": "Kişisel Web Sitesi",
          "date": "11/20/2019",
          "link": "kişisel-web-sitesi"
        },
        {
          "img": "https://omergulcicek.com/img/css.png",
          "title": "2019 Değerlendirmesi — İlk 6 Ay",
          "date": "10/25/2019",
          "link": "2019-değerlendirmesi-i̇lk-6-ay"
        },
        {
          "img": "https://omergulcicek.com/img/react.png",
          "title": "Günümüz Türkiye’si",
          "date": "9/17/2019",
          "link": "günümüz-türkiyesi"
        },
        {
          "img": "https://omergulcicek.com/img/es6.png",
          "title": "2018'in Ardından",
          "date": "11/20/2017",
          "link": "2018in-ardından"
        },
        {
          "img": "https://omergulcicek.com/img/react.png",
          "title": "JSX Nedir?",
          "date": "11/20/2017",
          "link": "jsx-nedir"
        },
        {
          "img": "https://omergulcicek.com/img/redux.png",
          "title": "The Imitation Game",
          "date": "11/20/2017",
          "link": "the-imitation-game"
        }
      ]
    };
  }

  getDateDiff(date) {
    // Parametre olarak aldığı tarih ile bugünün arasındaki gün farkını hesaplar

    let today = new Date(),
      dd = today.getDate(),
      mm = today.getMonth() + 1,
      yyyy = today.getFullYear(),
      
      date1 = new Date(date),
      date2 = new Date(mm + "/" + dd + "/" + yyyy),
      
      diffTime = Math.abs(date2 - date1),
      diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return diffDays;
  }

  date(date, isNew) {
    let diffDays = this.getDateDiff(date),
        html = document.getElementsByTagName("html")[0],
        url = new URL(window.location.href),
        lang = url.searchParams.get("lang") || html.getAttribute("lang");
        
    const rtf1 = new Intl.RelativeTimeFormat(lang, {numeric: "auto" });

    if(typeof isNew !== "undefined") {

      //Makale yayınlanma süresi 30 günden az ise "Yeni!" rozetini ekler
      return diffDays < 30;
    }
    else {

      //Makale yayınlanma süresini gün, hafta, ay, yıl olarak yazar
      if(diffDays >= 0 && diffDays <7) {
        return rtf1.format((diffDays * -1), "day")
      }
      else if(diffDays >= 7 && diffDays <28) {
        return rtf1.format(Math.floor(diffDays/7)  * -1, "week")
      }
      else if(diffDays >= 28 && diffDays <360) {
        return rtf1.format((Math.floor(diffDays/30) * -1), "month")
      }
      else if(diffDays >= 330) {
        return rtf1.format((Math.floor(diffDays/365) * -1), "year")
      }
      return date;
    }
  }

  render() {
    const {intl:{formatMessage}} = this.props;
    const {articles} = this.state;
    
    return (
      <section>
        <h2>
          {formatMessage(messages.latestArticles)}

          <ViewAll>
            <Link to="/blog">
                {formatMessage(messages.viewAll)}
            </Link>
          </ViewAll>
        </h2>

        <nav>
          {
            articles.map((e, i) => 
              i < 10 &&

              //Son 4 makale listelenir
              <Link to={`blog/${e.link}`} key={i}>
                <Article>
                  <AlignCenter>
                    <ArticleImg src={e.img} />
                    <FlexDirection>
                      <ArticleTitle>{e.title}</ArticleTitle>
                      <ArticleDate>
                        {this.date(e.date).charAt(0).toUpperCase() + this.date(e.date).slice(1)}
                      </ArticleDate>
                    </FlexDirection>
                  </AlignCenter>
                  {
                  this.date(e.date, true) &&
                    <Badge>{formatMessage(messages.new)}</Badge>
                  }
                </Article>
              </Link>
          )
          }
        </nav>
      </section>
    );
  }
}

export default injectIntl(LatestArticles);

const ViewAll = styled.span`
  background-color: rgba(0, 0, 0, .1);
  border-radius: 4px;
  color: var(--text-grey-dark);
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  line-height: 2;
  margin-left: 24px;
  padding-left: 8px;
  padding-right: 8px;
  transition: 0.1s all ease-out;

  &:hover {
    background-color: rgba(0, 0, 0, .15);
  }

  a {
    color: inherit;
    display: block;
  }
`;

const AlignCenter = styled.div`
  align-items: center;
  display: flex;
`;

const FlexDirection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Article = styled.article`
  align-items: center;
  border-bottom: 2px solid rgba(0, 0, 0, .05);
  display: flex;
  font-size: 16px;
  font-weight: 600;
  justify-content: space-between;
  line-height: 20px;
  padding: 12px 16px;
  position: relative;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, .05);
    border-radius: 8px;
  }
`;

const ArticleImg = styled.img`
  height: 62px;
  margin-right: 32px;
  vertical-align: middle;
`;

const ArticleTitle = styled.span`
  color: var(--text-color);
  margin-bottom: 4px;
`;

const ArticleDate = styled.time`
  color: var(--text-grey);
  display: block;
  font-size: 13px;
  font-weight: 400;
`;

const Badge = styled.div`
  background: rgba(247, 184, 1, 0.15);
  border-radius: 4px;
  color: #f7b801;
  font-size: 12px;
  font-weight: 600;
  margin-left: 16px;
  padding: 7px 12px;
`;
