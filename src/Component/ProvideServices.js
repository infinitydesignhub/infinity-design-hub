import React from 'react';

const servicesData = [
    {
        id: 1,
        title: 'Ui/ux Experience',
        subtitle: '01',
        link: 'https://wgl-dsites.net/bili/light/portfolio/technology-process/',
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_14-475x365.jpg',
    },
    {
        id: 2,
        title: 'Development',
        subtitle: '02',
        link: 'https://wgl-dsites.net/bili/light/portfolio/ui-for-music-website/',
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_12-475x365.jpg',
    },
    {
        id: 3,
        title: 'App Solutions',
        subtitle: '03',
        link: 'https://wgl-dsites.net/bili/light/portfolio/website-for-agency/',
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_11-475x365.jpg',
    },
    {
        id: 4,
        title: 'Product Design',
        subtitle: '04',
        link: 'https://wgl-dsites.net/bili/light/portfolio/mobile-app-for-bikes/',
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_13-475x365.jpg',
    },
    {
        id: 5,
        title: 'Branding',
        subtitle: '05',
        link: 'https://wgl-dsites.net/bili/light/portfolio/ui-for-music-website/',
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_16-475x365.jpg',
    },
    {
        id: 6,
        title: 'Illustration',
        subtitle: '06',
        link: 'https://wgl-dsites.net/bili/light/portfolio/technology-process/',
        image: 'https://wgl-dsites.net/bili/light/wp-content/uploads/2023/03/homepage-10_15-475x365.jpg',
    },
];

const ProvideServices = () => {
    return (
        <section className="provide_services bg-[#181818] pt-[124px] pb-14">
            <div className='container'>
                <div className='row m-auto'>
                    <div className="flex flex-col w-full md:w-1/3 p-4 col-4">
                        <div className="mb-4">
                            <span className="text-orange-400 dblh__subtitle">Our Benefits</span>
                            <h2 className="text-white text-5xl font-bold">Learn What Services We Provide</h2>
                        </div>
                        <a
                            href="https://wgl-dsites.net/bili/light/services/"
                            className="flex justify-center items-center my-0 mr-auto ml-0 p-14  hover:bg-orange-500 text-[16px] leading-[32px] text-center font-[400] bg-[#393939] text-white  py-2 rounded-full  tracking-wide  transition duration-200"
                        >
                            More Services
                        </a>
                    </div>
                    <div className="col-8">
                        {servicesData.map((service) => (
                            <div key={service.id} className="relative group showcase__content">
                                <a href={service.link} className="block relative z-10">
                                    <div className="">
                                        <div className="flex gap-2">
                                            <span className="sub block text-xl  text-[#5B5B5B] text-[20px] font-normal">{service.subtitle}</span>
                                            <span className="block text-[#5B5B5B] hover:text-white relative z-[2] text-[72px] font-bold">{service.title}</span>
                                        </div>
                                    </div>
                                    <div className='showcase__image'>
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-auto rounded-md"
                                        />
                                    </div>

                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProvideServices;
