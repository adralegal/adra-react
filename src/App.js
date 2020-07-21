import React, { useContext, useEffect } from "react"

import Blog from "./components/blog/blog"
import BlogRow from "./components/blogs-row/blogs-row"
import "./index.css";
import Layout from "./components/layout"

const blogs = [
  <Blog key={0} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={1} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={2} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={3} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={4} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={5} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={6} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={7} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
  <Blog key={8} title="Dummy Title" content={`The content of your new blog will be the bait that attracts your readers. In this guide, we will cover what content you need to write when you start a blog and the best practices you should follow.`} />,
]



//TODO use navbar and sidebar as component of layout
const App = (props) => {
  console.log(props);
  return (
    <>
      <Layout mobile={props.isMobile}>
        <BlogRow header="Recently Added" content={blogs} />
      </Layout>
    </>
  )
}

export default App;
