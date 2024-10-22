import React, { useEffect, useState } from 'react';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);

  // Placeholder function to mimic fetching data from Instagram API
  const fetchInstagramPosts = async () => {
    // Replace with your actual fetch call
    const fetchedPosts = [
      {
        id: 'sbi_1',
        link: 'https://www.instagram.com/p/C5rURK5SmSV/',
        imgSrc: './images/insta1.jpg', // Replace with actual image URLs
        alt: 'Instagram post C5rURK5SmSV',
        caption: 'A glimpse into our creative process!',
      },
      {
        id: 'sbi_2',
        link: 'https://www.instagram.com/p/C5jwnYUvFcv/',
        imgSrc: './images/insta2.jpg',
        alt: 'Instagram post C5jwnYUvFcv',
        caption: 'Exploring new design horizons.',
      },
      {
        id: 'sbi_3',
        link: 'https://www.instagram.com/p/C5RxfNvP9hz/',
        imgSrc: './images/insta3.jpg',
        alt: 'Instagram post C5RxfNvP9hz',
        caption: 'Collaboration leads to great ideas!',
      },
    ];
    setPosts(fetchedPosts);
  };

  useEffect(() => {
    fetchInstagramPosts();
  }, []);

  return (
    <div className="container container-lg mx-auto py-16">
      <h3 className='dblh__title-wrapper text-black text-2xl mb-12 font-medium text-center mt-12'>
        Our infinite creative approaches will ensure a unique brand image with infinite growth.
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="relative mt-10">
            <a href={post.link} target="_blank" rel="noopener noreferrer">
              <img
                src={post.imgSrc}
                alt={post.alt}
                className="w-full h-[450px] object-cover rounded-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="text-white w-12 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
                </svg>
              </div>
            </a>
            {/* <p className="mt-2 text-center text-sm text-[#232323]">{post.caption}</p> */}
          </div>
        ))}
      </div>

      <div className="mt-5">
        <a
          href="https://www.instagram.com/infinitydesignhub/"
          className="w-52 m-auto flex items-center justify-center bg-pink-600 text-white p-2 rounded"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg className="w-6 h-6 mr-2" aria-hidden="true" viewBox="0 0 448 512">
            <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
          </svg>
          Follow on Instagram
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;
