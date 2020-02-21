import React from "react"

import HomePage from "./Home"
import BlogPage from "./Blog"
import BlogDetailPage from "./BlogDetail"
import PersonelPage from "./Personel"
import AboutPage from "./About"
import ErrorPage from "./Error"

export function Home() {
  return (
    <HomePage />
  )
}

export function Blog() {
  return (
    <BlogPage />
  )
}

export function BlogDetail(props) {
  return (
    <BlogDetailPage id={props} />
  )
}

export function Personel() {
  return (
    <PersonelPage />
  )
}

export function About() {
  return (
    <AboutPage />
  )
}

export function Error() {
  return (
    <ErrorPage />
  )
}