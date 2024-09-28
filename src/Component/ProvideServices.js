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
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_14-475x365.jpg',
    },
    {
        id: 2,
        title: 'Branding Strategies',
        subtitle: '02',
        link: '/services/branding-strategies',
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_12-475x365.jpg',
    },
    {
        id: 3,
        title: 'Web Development',
        subtitle: '03',
        link: '/services/web-development',
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_11-475x365.jpg',
    },
    {
        id: 4,
        title: 'Digital Marketing',
        subtitle: '04',
        link: '/services/digital-marketing',
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_13-475x365.jpg',
    },
    {
        id: 5,
        title: 'Design Solutions',
        subtitle: '05',
        link: '/services/designsolutions',
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_16-475x365.jpg',
    },
    {
        id: 6,
        title: 'Content Writing',
        subtitle: '06',
        link: '/services/content-writing',
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_15-475x365.jpg',
    },
    {
        id: 7,
        title: 'Video Creation',
        subtitle: '07',
        link: '/services/video-creation',
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_16-475x365.jpg',
    },
    {
        id: 8,
        title: 'Printing Solutions',
        subtitle: '08',
        link: '/services/printing-solutions',
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_15-475x365.jpg',
    },
];

const ProvideServices = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <section className="provide_services bg-[#181818] pt-[124px] pb-14 my-10" id='services'>
            <div className='container'>
                <div className='row m-auto flex flex-wrap justify-between'>
                    <div className="flex flex-col w-full md:w-1/3 p-4 col-md-4 ">
                        <div className="mb-4 mt-10">
                            <span className="text-[#ec008c] dblh__subtitle mb-4 block text-lg font-bold mt-10">Our Benefits</span>
                            <h2 className="text-white text-3xl md:text-5xl font-bold mt-3 mb-3">Learn What Services We Provide</h2>
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
                                <Link to={service.link} className="block relative z-10">
                                    <div className="">
                                        <div className="flex gap-2">
                                            <span className="sub block text-xl  text-[#5B5B5B] text-[20px] font-normal">{service.subtitle}</span>
                                            <span className="block text-[#5B5B5B] hover:text-white relative z-[2] text-[52px] font-bold">{service.title}</span>
                                        </div>
                                    </div>
                                    <div className='showcase__image' data-aos="zoom-in">
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
