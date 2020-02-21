import React, { Component } from "react"
import TypeIt from "typeit-react"
import articleTimeAgo from "article-time-ago"

import { SEO, Jumbotron, Post } from "./../components"
import { TypeItWrap } from "./../utility/styled"

class Home extends Component {
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
        <SEO title="Ana Sayfa" />

        <TypeItWrap>
          <TypeIt
            options={{
              strings: ["Merhaba, Ben Ömer"],
              nextStringDelay: 1000,
              waitUntilVisible: true
            }}
          />
    
          <p>
            <TypeIt
              options={{
                strings: ["HTML5, CSS, JavaScript, ES6, React, Gatsby, Git"],
                nextStringDelay: 1250,
                speed: 90,
                startDelay: 3000,
                waitUntilVisible: true,
                breakLines: false,
                cursor: false
              }}
            />
          </p>
        </TypeItWrap>

        <Jumbotron
          title="Makaleler"
          viewAll={{ "isShow": true, "path": "/blog" }}>
            
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

        <Jumbotron
          title="Kişisel Yazılar"
          viewAll={{ "isShow": true, "path": "/personel" }}>
          
          {
            isLoaded &&
            article.reverse().map(({title, date, path, image}, i) => (

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

export default Home