// src/WhatsAppIcon.js
import React from 'react';

const WhatsAppIcon = () => {
    const whatsappUrl = 'https://wa.me/your-number'; // Replace with your WhatsApp number

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 left-5 bg-green-500 p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <i className="fab fa-whatsapp text-white text-3xl animate-pulse"></i>
        </a>
    );
};

export default WhatsAppIcon;
