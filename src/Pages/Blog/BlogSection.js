import React from "react";
import { Link } from "react-router-dom";
import DynamicSection from "../../Component/DynamicSection";
import contentData from "../../Data/contentData.json";
const BlogSection = () => {
  const blogs = [
    {
      title: "What is Lorem Ipsum?",
      date: "9th oct, 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      image: "./images/teamwork-making-online-blog.jpg",
      link: "/blogs/1",
    },
    {
      title: "What is Lorem Ipsum?",
      date: "9th oct, 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      image: "./images/teamwork-making-online-blog.jpg",
      link: "/blogs/2",
    },
    {
      title: "What is Lorem Ipsum?",
      date: "9th oct, 2024",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.",
      image: "./images/teamwork-making-online-blog.jpg",
      link: "/blogs/3",
    },
  ];

  return (
    <>
      <section className="container m-auto" id="blog">
        <div className="blog-page">
          <div className="blog-title w-full m-auto pt-6 pb-9">
            <h1 className="hidden text-center pt-1 lg:py-4">Blogs</h1>
            <img
              src="./images/blog.jpg"
              alt="blog banner"
              loading="lazy"
              className="w-full object-cover"
            />
          </div>
          <div className="blog-section block lg:flex justify-between gap-5 my-9 mx-auto border-t border-solid border-grey-500">
            <div className="w-full lg:w-[80%] m-auto">
              {blogs.map((blog, index) => (
                <article
                  key={index}
                  className="block lg:flex gap-2 my-4 border-solid border-b border-grey-500 py-3 box-border"
                >
                  <div className="my-4 lg:my-0 w-full lg:w-[60%]">
                    <h3 className="font-bold text-[22px]">
                      <a
                        rel="noreferrer"
                        className="text-black hover:to-blue-700"
                        href={blog.link}
                        target="_blank"
                      >
                        {blog.title}
                      </a>
                    </h3>
                    <p className="!text-17px opacity-95 break-normal pt-2">
                      {blog.description}
                    </p>
                    <div className="flex justify-between items-center mr-5">
                      <div className="date">
                        <p className="!text-sm break-normal border-solid border-b border-yellow-400">
                          {blog.date}
                        </p>
                      </div>
                      <Link
                        rel="noreferrer"
                        className="bg-[#ec008c] py-1 px-2 text-sm rounded-md text-white hover:text-white"
                        to={`/blogs/${index + 1}`} // Assuming the index corresponds to the ID
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                  <div className="post-image w-full lg:w-[40%]">
                    <img
                      src={blog.image}
                      alt="blog visual"
                      loading="lazy"
                      className="rounded-lg w-full"
                    />
                  </div>
                </article>
              ))}
            </div>
            <aside className="w-full lg:w-[20%] block lg:flex md:mt-4 md:justify-end lg:items-start md:text-right">
              <div className="slide-bar">
                <h4 className="text-lg font-bold border-solid border-b border-grey-500">
                  Explore more topics
                </h4>
                <ul className="grid grid-cols-3 md:grid-cols-2 md:gap-2 m-0 mt-4 p-0 md:text-right">
                  <li>
                    <Link
                      className="text-black font-semibold text-sm bg-[#e9e9e9] py-1 px-4 rounded-2xl"
                      to="/blogs/1"
                    >
                      Lorem
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-black font-semibold text-sm bg-[#e9e9e9] py-1 px-4 rounded-2xl"
                      to="/blogs/2"
                    >
                      React
                    </Link>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <DynamicSection {...contentData.blog} />
    </>
  );
};

export default BlogSection;
