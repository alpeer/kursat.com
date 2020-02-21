import React, { Component } from "react"
import articleTimeAgo from "article-time-ago"

import { SEO, Jumbotron, Post } from "./../components"

class Blog extends Component {
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
        <SEO title="Blog" />

        <Jumbotron
          title="Tüm Makaleler"
          description="
            <p>
              Frontend alanında yazdığım tüm makalelere buradan ulaşabilirsiniz.
              Karşılaştığım problemlerin çözüm yollarını hem unutmamak, hemde başka kişilere yardımcı olması için not alıyorum.
            </p>
            <p>
              Hatalı olduğunu düşündüğünüz içerikleri mail ile bildirebilirsiniz.
            </p>
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

export default Blog