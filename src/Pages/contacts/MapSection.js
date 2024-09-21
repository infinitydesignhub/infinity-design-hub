import React from 'react';

const mapSectionData = {
    title: "Find Us Here",
    mapEmbedUrl: "https://maps.google.com/maps?q=London%20Eye%2C%20London%2C%20United%20Kingdom&t=m&z=10&output=embed&iwloc=near",
    mapTitle: "London Eye, London, United Kingdom"
};

const MapSection = () => {
    return (
        <section className="elementor-section elementor-top-section map">
            <div className="elementor-column-gap-no">
                <div className="elementor-column elementor-col-100">
                    <div className="elementor-widget-wrap">
                        <div className="elementor-widget">
                            <div className="elementor-widget-container">
                                <div className="elementor-custom-embed">
                                    <iframe
                                        loading="lazy"
                                        src={mapSectionData.mapEmbedUrl}
                                        title={mapSectionData.mapTitle}
                                        aria-label={mapSectionData.mapTitle}
                                        className="w-full h-96"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MapSection;
