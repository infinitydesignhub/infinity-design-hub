import React from "react";
import { Link } from "react-router-dom";
import leftImages from '../../images/pink.jpg'
const TalkAboutDesignSection = ({ data }) => {
  // console.log("TalkAboutDesignSection data:", data);

  if (!data) return null; // Early return if no data

  const leftImage = data.leftImage?.fields?.file?.url; // Safe access
  const rightImage = data.rightImage?.fields?.file?.url; // Safe access

  if (!leftImage || !rightImage) {
    return <div>Images not available</div>; // Check if images are valid
  }

  return (
    <section className="container container-lg mx-auto py-16  flex flex-wrap talk">
      <div className="w-full md:w-1/2 py-4">
        <div className="">
          <div className="flex flex-col">
            <div className="mb-6 flex flex-wrap">
              <img
                loading="lazy"
                decoding="async"
                // src={leftImage}
                src={leftImages}
                alt=""
                style={{
                  width: "160px",
                  height: "80px",
                  margin: "auto 10px  auto 0",
                  borderRadius: "0px 100px 100px 0px",
                  objectFit:'cover'
                }}
                className="" // Ensure the image covers its px-5
              />

              <h2 className="text-[#232323] md:text-[90px] text-[50px] font-semibold mb-2 text-center uppercase mr-5">
                {data.pageTitle}
              </h2>
              <span
                className="md:text-[90px] text-[50px] font-bold uppercase"
                style={{
                  color: "transparent",
                  WebkitTextStroke: "1px rgb(35, 35, 35)",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {data.pageSubTitle}
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-6">
            <h2 className="service-title text-4xl font-bold mt-3 mb-3 text-[#232323]">
              {data.leftTitle}
            </h2>
          </div>
          <div className="mb-4 flex">
            <div>
              {/* <img
            loading="lazy"
            decoding="async"
            src={leftImage}
            alt={data.leftTitle}
            className="w-full h-auto round-img"
          /> */}
            </div>
            <p className="mb-6 text-[18px] leading-[36px] pr-10">
              {data.leftSubTitle}
            </p>
          </div>
          <div className="flex  space-x-4 gap[15px]">
            <Link
              to="/contact"
              className="inline-block text-black wgl-button relative px-8 py-3 z-1 font-semibold rounded-full  transition-all duration-300  px-4 py-2 rounded-lg"
            >
              {data.getInTouchButton}
            </Link>
            {/* <Link
            to="/about"
            className="inline-block text-black wgl-button relative px-8 py-3 z-1 font-semibold rounded-full  transition-all duration-300  px-4 py-2 rounded-lg"
          >
              {data.getInTouchButton}
          </Link> */}
          </div>
          <p className="mb-6 text-[18px] leading-[36px]">{data.description}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 py-4">
        <div className="mb-6">
          <img
            loading="lazy"
            decoding="async"
            src={rightImage}
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default TalkAboutDesignSection;
