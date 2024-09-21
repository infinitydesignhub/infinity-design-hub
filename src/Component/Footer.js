import React from 'react';
import footerData from '../Data/footerData.json';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-4 gap-8">
          <div>
            <a href={footerData.logo.link}>
              <img src={footerData.logo.src} alt={footerData.logo.alt} className="h-7" />
            </a>
            <p className='py-4'>
              We build killer Squarespace sites with our quick and pain-free process
            </p>
            <div className="sqs-block button-block sqs-block-button" data-block-type="53" id="block-yui_3_17_2_1_1685733755740_4014"><div className="sqs-block-content" id="yui_3_17_2_1_1726774254249_483">
              <div className="sqs-block-button-container sqs-block-button-container--left" data-animation-role="button" data-alignment="left" data-button-size="medium" data-button-type="primary" id="yui_3_17_2_1_1726774254249_482">
                <Link to="/contact" className="sqs-block-button-element--medium sqs-button-element--primary sqs-block-button-element" data-initialized="true">
                Get inTouch
                </Link>
              </div>
            </div></div>
          </div>

          <div>
            <h5 className="text-lg font-semibold mb-4">Navigation</h5>
            <ul>
              {footerData.services.map((service, index) => (
                <li key={index} className="mb-2">
                  <Link to={service.link} className="hover:text-gray-400">{service.text}</Link>
                </li>
              ))}
            </ul>
          </div>
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
          <div>Copyright © 2024 All Rights Reserved</div>
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
