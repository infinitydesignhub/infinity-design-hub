import React from 'react'
import PageHeader from './About/PageHeader'
import AboutSection from './About/AboutSection'
import VisionSection from './About/VisionSection'
import FeaturesSection from './About/FeaturesSection'
import WhyUs from './About/WhyUs'
import TextPath from '../Component/TextPath'
import GetInTouch from './About/GetInTouch'


const About = () => {
  return (
    <>
    <PageHeader/>
    <AboutSection/>
    <WhyUs/>
    <TextPath/>
    <VisionSection/>
    <FeaturesSection/>
    <GetInTouch/>
    </>
  )
}

export default About