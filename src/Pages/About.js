import React from 'react';
import PageHeader from './About/PageHeader';
import AboutSection from './About/AboutSection';
// import BenefitsSection from '../Component/BenefitsSection';
import WhyUs from './About/WhyUs';
import TextPath from '../Component/TextPath';
import VisionSection from './About/VisionSection';
import FeaturesSection from '../Component/FeaturesSection';
import DynamicSection from '../Component/DynamicSection';
// import data from '../Data/benefits.json';
import wData from '../Data/WhyUsData.json';
import featuresData from '../Data/FeaturesData.json';
import CounterSection from '../Component/CounterSection';
import contentData from '../Data/contentData.json';

const About = () => {
  return (
    <>
      <PageHeader />
      <AboutSection />
      {/* <BenefitsSection data={data.about} /> */}
      <TextPath />
      <WhyUs wData={wData.about} />
      <CounterSection />
      <VisionSection />
      <FeaturesSection data={featuresData.about} />
      <DynamicSection {...contentData.about} />
    </>
  );
};

export default About;
