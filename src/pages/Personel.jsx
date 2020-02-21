import React, { Component } from "react"
import articleTimeAgo from "article-time-ago"

import { SEO, Jumbotron, Post } from "./../components"

class Personel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      article: null
    }
  }
  
  componentDidMount() {
    fetch(`http://localhost:3000/articles/`)
      .then(res => res.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            article: result
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
    const { article, isLoaded } = this.state

    return (
      <section>
        <SEO title="Kişisel Yazılarım" />

        <Jumbotron
          title="Kişisel Yazılarım"
          description="
            <p>Yaşadıklarım, eleştirilerim, hedeflerim, kitap/dizi/film önerilerim</p>
          "
          viewAll={{ "isShow": false }}>

          {
            isLoaded &&
            article.map(({title, date, path, image}, i) => (

              <Post
                key={i}
                title={title}
                date={articleTimeAgo.date(date)}
                path={path}
                image={image}
              />
            ))
          }
        </Jumbotron>
      </section>
    )
  }
}

export default Personel