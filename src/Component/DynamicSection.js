import React from 'react';
import { Link } from 'react-router-dom';

const DynamicSection = ({ imageSrc, titleParts, description, button }) => {
    return (
        <section className="pb-44 pt-16">
            <div className="container mx-auto px-4">
            <hr></hr>
            <div className='my-16'>
                <div className="flex flex-col items-center">
                    <div className="mb-6 flex flex-wrap">
                        <img
                            loading="lazy"
                            decoding="async"
                            src={imageSrc}
                            alt=""
                            style={{
                                width: '320px',
                                height:'86px',
                                margin: 'auto 10px  auto 0',
                                borderRadius:'0px 100px 100px 0px'
                            }}
                        className="" // Ensure the image covers its container
                        />
                        {titleParts.map((part, index) => (
                            <h2 key={index} className="text-[#232323] text-[120px] font-semibold mb-2 text-center">
                                {part}
                            </h2>
                        ))}
                    <p className="text-[20px] text-[#5B5B5B] md:text-xl max-w-2xl mb-6">
                        {description}
                    </p>
                    </div>
                    <div className="btn-circle">
                        <Link
                            className="btn-size-lg w-full lg:w-auto bg-blue-500 text-white text-lg"
                            to="/contact"
                            role="button"
                            data-aos="zoom-in" // Add animation attribute for button
                        >
                            {button}
                        </Link>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default DynamicSection;
