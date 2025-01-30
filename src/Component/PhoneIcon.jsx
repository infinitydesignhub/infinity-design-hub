import React from 'react';

const PhoneIcon = () => {
    const phoneNumber = 'tel:+16594008283'; // Replace with your phone number

    return (
        <a
            href={phoneNumber}
            className="fixed bottom-20 left-5 bg-[#ec008c] py-[5px] px-[10px] rounded-[100%] shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
            <i className="fas fa-phone text-white text-2xl animate-pulse"></i>
        </a>
    );
};

export default PhoneIcon;