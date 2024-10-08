import React from 'react';
import { Link, useParams } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();

  const blogData = [
    {
      id: "1",
      subtitle: "Research & Planning",
      title: "First Step",
      content: "Details about the first step...",
      image: "/images/homepage-9_6.jpg",
    },
    {
      id: "2",
      subtitle: "Design & Development",
      title: "Second Step",
      content: "Details about the second step...",
      image: "/images/homepage-9_7.jpg",
    },
    {
      id: "3",
      subtitle: "Customize & Testing",
      title: "Third Step",
      content: "Details about the third step...",
      image: "/images/homepage-9_8.jpg",
    },
  ];

  const blogPost = blogData.find(post => post.id === id);

  if (!blogPost) return <div>Post not found</div>;

  return (
    <div className="container mx-auto py-20">
      {/* Banner */}
      <div className="bg-blue-500 text-white text-center p-4 mb-8">
        <h1 className="text-3xl font-bold">Welcome to Our Blog!</h1>
      </div>

      <div className="flex">
        {/* Left Side - Current Post */}
        <div className="flex-1 pr-4">
          <h2 className="text-2xl font-bold">{blogPost.title}</h2>
          <h3 className="text-xl text-gray-600">{blogPost.subtitle}</h3>
          <img src={blogPost.image} alt={blogPost.title} className="mb-4 w-full" />
          <p>{blogPost.content}</p>
        </div>

        {/* Right Side - Related Posts */}
        <div className="w-1/3">
          <h3 className="text-xl font-bold mb-4">Related Posts</h3>
          <ul>
            {blogData.map(post => (
              <li key={post.id} className="border-b py-2">
                <Link to={`/blog/${post.id}`} className="text-blue-600 hover:underline">
                  {post.title}
                  <img src={post.image} alt='' className='w-14'/>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
