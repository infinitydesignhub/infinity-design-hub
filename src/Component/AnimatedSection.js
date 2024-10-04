import React from 'react';

const AnimatedSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-purple-500 w-full h-auto">
      <div className="container container-lg mx-auto">
        <div className="flex flex-col items-center">
          <div className="my-10"></div>
          <div className="wgl-text-path loop_animation clone_text">
            <div className="simple_line">
              <div className="simple_line--wrapper" style={{ width: '8780px' }}>
                <span className="text--word">
                  Website Development _ UI/UX _ Branding Strategy _ Photography&nbsp;
                </span>
                <span className="text--word">
                  Website Development _ UI/UX _ Branding Strategy _ Photography
                </span>
              </div>
            </div>
          </div>
          <div className="wgl-text-path loop_animation clone_text mt-10">
            <div className="simple_line">
              <div className="simple_line--wrapper" style={{ width: '4420px' }}>
                <span className="text--word">
                  eCommerce _ Marketing _ SEO&nbsp;
                </span>
                <span className="text--word">
                  eCommerce _ Marketing _ SEO
                </span>
              </div>
            </div>
          </div>
          <div className="my-10"></div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedSection;
