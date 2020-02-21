import React from "react"

import LayoutTemp from "./Layout"
import SEOTemp from "./Seo"
import JumbotronTemp from "./Jumbotron"
import PostTemp from "./Post"

export function Layout({ children }) {
  return (
    <LayoutTemp content={children} />
  )
}

export function SEO({ title }) {
  return (
    <SEOTemp title={title} />
  )
}

export function Jumbotron({ title, viewAll, description, children }) {
  return (
    <JumbotronTemp
      title={title}
      description={description}
      viewAll={viewAll}
      content={children} />
  )
}

export function Post({ title, path, date, image }) {
  return (
    <PostTemp 
      title={title}
      path={path}
      date={date}
      image={image} />
  )
}
