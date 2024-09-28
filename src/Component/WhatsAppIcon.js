// src/WhatsAppIcon.js
import React from 'react';

const WhatsAppIcon = () => {
    const whatsappUrl = 'https://wa.me/+16594008283'; // Replace with your WhatsApp number

    return (
        <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-5 left-5 bg-green-500 py-[5px] px-[10px] rounded-[100%] shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <i className="fab fa-whatsapp text-white text-3xl animate-pulse"></i>
        </a>
    );
};

export default WhatsAppIcon;
