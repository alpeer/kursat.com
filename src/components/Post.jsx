import React from "react"
import { Link } from "react-router-dom"

import { PostArticle, Figure, FlexColumn, PostTitle, Time } from "./../utility/styled"

const Post = ({ title, path, date, image }) => (
  <PostArticle>
    {
      image &&
      <Figure>
        <img src={`https://omergulcicek.com/img/${image}.png`} height="62" width="62" alt={image} loading="lazy" />
      </Figure>
    }

    <FlexColumn>
      <Link to={path}>
        <PostTitle>
          {title}
        </PostTitle>
      </Link>
      
      <Time>{ date }</Time>
    </FlexColumn>
  </PostArticle>
)

export default Post