import React, { Component, Fragment } from "react"
import { Link } from "react-router-dom"
import ReactMarkdown from "react-markdown"

import { SEO } from "./../components"

import { Article, ArticleTitle, ArticleDate, ArticleReadingTime, ArticleMain, PrevNext } from "./../utility/styled"


class BlogDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      article: {}
    }
  }

  componentDidMount() {
    const { path } = this.props.id.match.params

    fetch(`http://localhost:3000/articles/?path=${path}`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: false,
            article: result[0]
          })
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render () {
    const { error, isLoaded, article } = this.state
    
    if(typeof article === "undefined") {
      window.location.href = "/404"
    }
    
    const { date, title, html } = article

    if (error) {
      return <div>Hata: {error.message}</div>
    }
    else if (isLoaded) {
      return <div>Yükleniyor...</div>
    }
    else {
      return (
        <Fragment>
          <SEO title={title} />

          <section>
            <Article>
              <header>
                <ArticleTitle>{title}</ArticleTitle>

                <ArticleDate title={`${date} tarihinde, Ömer Gülçiçek tarafından yazılmıştır.`}>{date}</ArticleDate> -
                
                <ArticleReadingTime role="img" aria-label="⏱️">⏱️ 5 dk</ArticleReadingTime>
              </header>

              <ArticleMain>
                <ReactMarkdown source={html} />
              </ArticleMain>
            </Article>
          </section>
        </Fragment>
      )
    }
  }
}


export default BlogDetail