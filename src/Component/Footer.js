import React from 'react';
import footerData from '../Data/footerData.json';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#0E0E0E] text-white">
      <div className="container mx-auto py-8">
        <div className="row"> 
          <div className='col-md-4'>
            <a href={footerData.logo.link}>
              <img src={footerData.logo.src} alt={footerData.logo.alt} className="h-7" />
            </a>
            <p className='py-4'>
              We build killer Squarespace sites with our quick and pain-free process
            </p>
            <div className="sqs-block button-block sqs-block-button">
              <div className="sqs-block-button-container sqs-block-button-container--left">
                <Link to="/contact" className="inline-block text-white wgl-button relative px-8 py-3 z-1 font-semibold rounded-full transition-all duration-300 px-4 py-2 rounded-lg">
                  Get inTouch
                </Link>
              </div>
            </div>
          </div>

          <div className='col-md-4 m-auto'>
            <h5 className="text-lg font-semibold mb-4">Navigation</h5>
            <ul className='pl-0'>
              {footerData.services.map((service, index) => (
                <li key={index} className="mb-2">
                  <Link to={service.link} className="hover:text-gray-400">{service.text}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className='col-md-4'>
            <h5 className="text-lg font-semibold mb-4">Contacts</h5>
            <ul className='pl-0'>
              <li className="mb-2">{footerData.contacts.address}</li>
              <li className="mb-2">
                <a href={`tel:${footerData.contacts.phone}`} className="hover:text-gray-400">{footerData.contacts.phone}</a>
              </li>
              <li className="mb-2">
                <a href={`mailto:${footerData.contacts.email}`} className="hover:text-gray-400">{footerData.contacts.email}</a>
              </li>
            </ul>
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
          </div>
        </div>

        {/* Footer Bottom Links */}
        <div className="mt-8 grid grid-cols-2 text-sm text-gray-400">
          <div>Copyright © 2024 All Rights Reserved</div>
          {/* Uncomment if you want footer links */}
          {/* <div className="flex justify-end space-x-4">
            {footerData.footerLinks.map((link, index) => (
              <a key={index} href={link.link} className="hover:text-white">{link.text}</a>
            ))}
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
