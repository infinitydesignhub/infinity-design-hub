import React from 'react'
import Blog from '../../Component/Blog'
import DynamicSection from '../../Component/DynamicSection'
import contentData from "../../Data/contentData.json";

const BlogPage = () => {
  return (
    <>
      <Blog/>
      <DynamicSection {...contentData.blog} />
    </>
  )
}

export default BlogPage
