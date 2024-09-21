import React, { useEffect, useState } from 'react';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const accessToken = process.env.REACT_APP_INSTAGRAM_ACCESS_TOKEN; // Use environment variable for access token

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(`https://graph.instagram.com/me/media?fields=id,caption,media_type,media_url,permalink&access_token=${accessToken}&limit=3`);
        const data = await response.json();
        setPosts(data.data);
      } catch (error) {
        console.error('Error fetching Instagram posts:', error);
      }
    };

    fetchPosts();
  }, [accessToken]);

  return (
    <div className="w-full p-4">
      <div className="flex flex-col items-center mb-4">
        <h3 className="text-lg font-semibold">Latest Instagram Posts</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map(post => (
          <div key={post.id} className="relative">
            <a href={post.permalink} target="_blank" rel="noopener noreferrer">
              <img 
                src={post.media_url} 
                alt={post.caption} 
                className="w-full h-auto rounded-lg shadow-lg transition-transform transform hover:scale-105" 
              />
            </a>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <a 
          href="https://www.instagram.com/infinitydesignhub/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-pink-600 text-white font-semibold py-2 px-4 rounded hover:bg-pink-700 transition duration-200"
        >
          Follow on Instagram
        </a>
      </div>
    </div>
  );
};

export default InstagramFeed;
