import React from 'react';
import { Link } from 'react-router-dom';

const DynamicSection = ({ imageSrc, titleParts, description, button }) => {
    return (
        <section className="py-16">
            <div className="custom-container mx-auto px-4">
            <hr></hr>
            <div className='my-16'>
                <div className="flex flex-col">
                    <div className="mb-6 flex flex-wrap w-[90%]">
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
                        className="" // Ensure the image covers its custom-container
                        />
                        {titleParts.map((part, index) => (
                            <h2 key={index} className="text-[#232323] text-[120px] font-semibold mb-2 text-center">
                                {part}
                            </h2>
                        ))}
                           <div className="btn-size-lg bg-blue-500 flex items-center justify-center"
                            style={{
                                width: '320px',
                                height:'86px',
                                margin: 'auto 30px 15px',
                                borderRadius:'0px 100px 100px 0px'
                            }}
                           >
                        <Link
                            className="full lg:w-auto text-white text-lg"
                            to="/contact"
                            role="button"
                            data-aos="zoom-in" // Add animation attribute for button
                        >
                            {button}
                        </Link>
                    </div>
                    </div>
                    <div>
                    <p className="text-[20px] text-[#5B5B5B] md:text-xl max-w-2xl mb-6">
                        {description}
                    </p>
                 
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default DynamicSection;
