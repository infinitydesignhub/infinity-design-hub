import React from "react";
import { useParams } from "react-router-dom";
import DynamicSection from '../../Component/DynamicSection'
import contentData from "../../Data/contentData.json";

const BlogDetails = () => {
  const { id } = useParams(); // Get the blog ID from the URL

  const blogs = [
    {
      id: "1",
      title: "What is Lorem Ipsum?",
      date: "9th Oct, 2024",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      image: "../images/teamwork-making-online-blog.jpg",
    },
    {
      id: "2",
      title: "What is Lorem Ipsum?",
      date: "9th Oct, 2024",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      image: "../images/teamwork-making-online-blog.jpg",
    },
    {
      id: "3",
      title: "What is Lorem Ipsum?",
      date: "19th Oct, 2024",
      content:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
      image: "../images/teamwork-making-online-blog.jpg",
    },
    // ... other blogs
  ];

  // Find the blog post based on the ID
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return <p>Blog not found!</p>;
  }

  return (
    <>
    <div className="container mx-auto py-8">
      <h3 className="text-4xl font-bold mt-3 mb-3 text-[#232323]">
        {blog.title}
      </h3>
      <p className="text-[#ec008c] font-bold mb-4 text-sm">{blog.date}</p>
      <img
        src={blog.image}
        alt={blog.title}
        loading="lazy"
        className="w-full h-auto mb-4 rounded-lg"
      />
      <p className="text-lg">{blog.content}</p>
    </div>
      <DynamicSection {...contentData.blog} />
    </>
  );
};

export default BlogDetails;
