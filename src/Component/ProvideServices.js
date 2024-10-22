import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const servicesData = [
    {
        id: 1,
        title: 'Logo Design',
        subtitle: '01',
        link: '/services/logo-design',
        image: '/images/newImages/Logo-Home-Page-Service-1.jpg',
    },
    {
        id: 2,
        title: 'Branding Strategies',
        subtitle: '02',
        link: '/services/branding-strategies',
        image: '/images/newImages/Branding-Home-Page-Service.jpg',
    },
    {
        id: 3,
        title: 'Website Development',
        subtitle: '03',
        link: '/services/web-development',
        image: '/images/newImages/Web-Homer-Service.jpg',
    },
    {
        id: 4,
        title: 'Digital Marketing',
        subtitle: '04',
        link: '/services/digital-marketing',
        image: '/images/newImages/Digital-Marketing-Service.jpg',
    },
    {
        id: 5,
        title: 'Design Solutions',
        subtitle: '05',
        link: '/services/designsolutions',
        image: '/images/newImages/Design-Solution-Service.jpg',
    },
    {
        id: 6,
        title: 'Packaging & Printing',
        subtitle: '08',
        link: '/services/printing-solutions',
        image: '/images/newImages/Printing-Solution-Service.jpg',
    },
    {
        id: 7,
        title: 'Content Writing',
        subtitle: '06',
        link: '/services/content-writing',
        image: '/images/newImages/Content-Service.jpg',
    },
    {
        id: 8,
        title: 'Video Creation',
        subtitle: '07',
        link: '/services/video-creation',
        image: '/images/newImages/Video-Creation-Service.jpg',
    },
    
];

const ProvideServices = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="provide_services bg-[#181818] py-[100px] my-10" id='services'>
            <div className='container container-lg mx-auto'>
                <div className='row m-auto flex flex-wrap justify-between'>
                    <div className="flex flex-col w-full md:w-1/3 p-4 col-md-4 ">
                        <div className="mb-4 mt-10">
                            <span className="text-[#ec008c] dblh__subtitle mb-4 block text-lg font-bold mt-10">Our Benefits</span>
                            <h2 className="text-white text-3xl md:text-5xl font-bold mt-3 mb-3">What Services We Provide</h2>
                        </div>
                        <Link
                            to="/contact"
                            className="flex wgl-button text-white no-underline relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300 w-40 mb-5 md:mb-0"
                        >
                            Get inTouch
                        </Link>
                    </div>
                    <div className="col-8">
                        {servicesData.map((service) => (
                            <div
                                key={service.id}
                                className="relative group showcase__content"
                                data-aos="fade-up"
                            >
                                <Link to={service.link} className="block relative z-10 hover:text-white">
                                    <div className="">
                                        <div className="flex gap-2">
                                            <span className="sub block text-xl  text-[#5B5B5B] text-[20px] font-normal">{service.subtitle}</span>
                                            <span className="block text-[#5B5B5B] hover:text-white relative z-[2] text-[52px] font-bold">{service.title}</span>
                                        </div>
                                    </div>
                                    <div className='showcase__image'>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-auto rounded-md"
                                        />
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProvideServices;
