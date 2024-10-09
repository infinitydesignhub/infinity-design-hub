import React from 'react'
import DynamicSection from '../../Component/DynamicSection'
import contentData from "../../Data/contentData.json";
import BlogSection from './BlogSection';

const BlogPage = () => {
  return (
    <>
      <BlogSection/>
      <DynamicSection {...contentData.blog} />
    </>
  )
}

export default BlogPage
