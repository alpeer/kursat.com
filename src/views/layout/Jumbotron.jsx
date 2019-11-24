import React, {Component, Fragment} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

class Jumbotron extends Component {
  render() {
    const {title, content, viewAll, viewAllLink, newBadge} = this.props;

    return (
      <Fragment>
        <section>
        <Title>
          {title}

          <ViewAll>
            <Link to={viewAllLink}>
              {viewAll}
            </Link>
          </ViewAll>
        </Title>

        <nav>
          {
            content.map((e, i) => 
              
              //Son 4 içerik listelenir
              i < 4 &&

              e.link.startsWith("http") ?

              <a href={e.link} key={i} target="_blank" rel="noopener noreferrer">
                <JumbotronChild e={e} />
              </a>
              
              :

              <Link to={e.link} key={i}>
                <JumbotronChild e={e} newBadge={newBadge} />
              </Link>
          )
          }
        </nav>
      </section>
      </Fragment>
    );
  }
}

export default Jumbotron;

class JumbotronChild extends Component {

  //Parametre olarak aldığı tarihi gün, ay, yıl olarak ayrıştırır
  dateParse = (date) => {
    let current = new Date(date),
      dd = current.getDate(),
      mm = current.getMonth() + 1,
      yyyy = current.getFullYear();

    return { dd, mm, yyyy };
  }
  
  //Parametre olarak aldığı tarih ile bugünün arasındaki gün farkını hesaplar
  dateDiff = (date) => {
    let today = this.dateParse(new Date()),

      date1 = new Date(date),
      date2 = new Date(`${today.mm}/${today.dd}/${today.yyyy}`),
      
      diffTime = Math.abs(date2 - date1),
      diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      return diffDays;
  }

  //Makale yayınlanma süresi 30 günden az ise "Yeni!" rozetini ekler
  badge = (date) => this.dateDiff(date) < 30

  //Makale yayınlanma süresini gün, hafta, ay, yıl olarak ne kadar önce oluşturulduğunu yazar
  //Tarayıcı bu özelliği desteklemiyorsa, tarihi formatlayıp yazar
  date = (date) => {
    let diffDays = this.dateDiff(date),
        html = document.getElementsByTagName("html")[0],
        url = new URL(window.location.href),
        lang = url.searchParams.get("lang") || html.getAttribute("lang");
        

    if(typeof window.Intl.RelativeTimeFormat !== "undefined"){
      const rtf1 = new Intl.RelativeTimeFormat(lang, {numeric: "auto" });

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
    }
    else {
      let d = this.dateParse(date);
      return `${d.dd}.${d.mm}.${d.yyyy}`
    }
  }

  render() {
    const {e, newBadge} = this.props;
    
    return (
      <Fragment>
        <Article>
          <AlignCenter>
            <ArticleImg src={e.img} />
            <FlexDirection>
              <ArticleTitle>{e.title}</ArticleTitle>
              <ArticleDate>
                {e.description}
                {this.date(e.date)}
              </ArticleDate>
            </FlexDirection>
          </AlignCenter>
          {
          this.badge(e.date) &&
            <Badge>{newBadge}</Badge>
          }
        </Article>
      </Fragment>
    )
  }
}

const Title = styled.h2`
  color: var(--text-color);
  dispay: flex;
  font-weight: 700;
  font-size: 1.3rem;
  justify-content: space-between;
  margin: 0 0 1rem;
  position: relative;

  @media (min-width: 64rem) {
    font-size: 2rem;
  }
`;

const ViewAll = styled.span`
  background-color: rgba(0, 0, 0, .1);
  border-radius: 4px;
  color: var(--text-grey-dark);
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  line-height: 2;
  margin-left: 1rem;
  padding-left: .5rem;
  padding-right: .5rem;
  transition: 0.1s all ease-out;
  white-space: nowrap;

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
  font-size: 1rem;
  font-weight: 600;
  justify-content: space-between;
  line-height: 20px;
  padding: .75rem 0;
  position: relative;
  text-decoration: none;

  &:hover {
    background-color: rgba(0, 0, 0, .05);
    border-radius: 8px;
  }

  @media (min-width: 64rem) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

const ArticleImg = styled.img`
  display: none;
  height: 62px;
  margin-right: 1rem;
  vertical-align: middle;

  @media (min-width: 64rem) {
    display: block;
    margin-right: 2rem;
  }
`;

const ArticleTitle = styled.span`
  color: var(--text-color);
  margin-bottom: .25rem;
`;

const ArticleDate = styled.time`
  color: var(--text-grey);
  display: block;
  font-size: 13px;
  font-weight: 400;
  text-transform: capitalize;
`;

const Badge = styled.div`
  background: rgba(247, 184, 1, 0.15);
  border-radius: 4px;
  color: #f7b801;
  font-size: 12px;
  font-weight: 600;
  margin-left: 1rem;
  padding: .4rem .75rem;
`;

