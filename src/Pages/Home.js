import React from "react";

import BannerSection from "../Component/Banner";
import BenefitsSection from "../Component/BenefitsSection";
import TextPath from "../Component/TextPath";
import ServicesSection from "../Component/ServicesSection";
import CounterSection from "../Component/CounterSection";
import TitleSubTitle from "../Component/TitleSubTitle";
import PricingSection from "../Component/PricingSection";
// import GetInTouch from "../Component/GetInTouch";
import DynamicSection from "../Component/DynamicSection";
import ClientSlider from "../Component/ClientSlider";
import Testimonials from "../Component/Testimonials";
import ProvideServices from "../Component/ProvideServices";
import Blog from "../Component/Blog";
import VisionSection from "../Component/VisionSection";
// import Portfolio from './Portfolio';
import data from "../Data/benefits.json";
import allData from "../Data/OurApproach.json"; // Adjust the path as necessary
import contentData from "../Data/contentData.json";
import InstagramFeed from "../Component/InstagramFeed";
// import ImageMasonry from "../Component/Portfolio";
// import MasonryGallery from "../Component/MasonryG";
const Home = () => {
  const { approach, services } = allData.page1; // Get data for Page 1
  return (
    <>
      <BannerSection />
      <BenefitsSection data={data.home} />
      <TextPath />
      <ServicesSection approach={approach} services={services} />
      <ProvideServices />
      <VisionSection />
      <ClientSlider />
      <TitleSubTitle />
      <PricingSection />
      <CounterSection />
      <Testimonials />
      <Blog />
      {/* <ImageMasonry/> */}
      {/* <GetInTouch /> */}
      <InstagramFeed />
      <DynamicSection {...contentData.about} />
      {/* <Portfolio/> */}
      {/* <div className="container">
        <div className="masonry-container">
          <p>ReactJS Responsive/Modular Masonry Grid.</p>
          <MasonryGallery />
        </div>
      </div> */}
    </>
  );
};

export default Home;
