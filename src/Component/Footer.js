import React from 'react';
import footerData from '../Data/footerData.json';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12">
        {/* Logo Section */}
        <div className="grid grid-cols-4 gap-8">
          <div>
            <a href={footerData.logo.link}>
              <img src={footerData.logo.src} alt={footerData.logo.alt} className="h-7" />
            </a>
          </div>

          {/* Services Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Services</h5>
            <ul>
              {footerData.services.map((service, index) => (
                <li key={index} className="mb-2">
                  <a href={service.link} className="hover:text-gray-400">{service.text}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contacts</h5>
            <ul>
              <li className="mb-2">{footerData.contacts.address}</li>
              <li className="mb-2">
                <a href={`tel:${footerData.contacts.phone}`} className="hover:text-gray-400">{footerData.contacts.phone}</a>
              </li>
              <li className="mb-2">
                <a href={`mailto:${footerData.contacts.email}`} className="hover:text-gray-400">{footerData.contacts.email}</a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Subscribe</h5>
            <form className="flex">
              <input
                type="email"
                placeholder={footerData.subscribe.placeholder}
                className="w-full p-2 text-gray-800 rounded-l-md focus:outline-none"
              />
              <button className="bg-blue-600 p-2 rounded-r-md">{footerData.subscribe.buttonText}</button>
            </form>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="mt-8 flex space-x-4">
          {footerData.socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="text-white hover:text-gray-400"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.platform}
            >
              <i className={social.iconClass}></i>
            </a>
          ))}
        </div>

        {/* Footer Bottom Links */}
        <div className="mt-8 grid grid-cols-2 text-sm text-gray-400">
          <div>Copyright © 2022 Bili by WebGeniusLab. All Rights Reserved</div>
          <div className="flex justify-end space-x-4">
            {footerData.footerLinks.map((link, index) => (
              <a key={index} href={link.link} className="hover:text-white">{link.text}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
