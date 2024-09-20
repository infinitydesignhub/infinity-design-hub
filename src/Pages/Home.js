import React from 'react'

import BannerSection from "../Component/Banner";
import BenefitsSection from "../Component/BenefitsSection";
import TextPath from "../Component/TextPath";
import ServicesSection from "../Component/ServicesSection";
import CounterSection from "../Component/CounterSection";
import TitleSubTitle from "../Component/TitleSubTitle";
import PricingSection from "../Component/PricingSection";
import GetInTouch from "../Component/GetInTouch";
import ClientSlider from "../Component/ClientSlider";
import Testimonials from "../Component/Testimonials";
import ProvideServices from '../Component/ProvideServices';
// import Portfolio from './Portfolio';

const Home = () => {
    return (
        <>
            <BannerSection />
            <BenefitsSection />
            <TextPath />
            <ServicesSection />
            <CounterSection />
            <TitleSubTitle />
            <PricingSection />
            <ClientSlider />
            <Testimonials />
            <ProvideServices/>
            <GetInTouch />
    {/* <Portfolio/> */}
        </>
    )
}

export default Home