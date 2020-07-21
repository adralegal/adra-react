import React, { FunctionComponent } from "react"
import classes from "./blog.module.css"

type BlogProps = {
  title: string
  content: string
  withImage?: boolean
}

const Blog: FunctionComponent<BlogProps> = ({ title, content, withImage }) => {
  return (
    <div className={classes.Wrapper}>
      <h1>"</h1>
      <h3>{title}</h3>
      <p>{content}</p>
      <span>Read More...</span>
    </div>
  )
}

export default Blog;
