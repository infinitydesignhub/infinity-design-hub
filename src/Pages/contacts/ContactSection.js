import React from 'react';

const contactSectionData = {
  title: 'Drop Us a Line',
  description: 'Your email address will not be published. Required fields are marked *',
  form: {
    namePlaceholder: 'Your Name',
    websitePlaceholder: 'Website',
    commentPlaceholder: 'Your Comment',
    submitButtonText: 'GET IN TOUCH',
  },
  contacts: {
    header: 'OUR CONTACTS',
    subHeader: "Let’s Start Working Together. Get in Touch with Us!",
    description: 'Get in touch to discuss your employee wellbeing needs today. Please give us a call, drop us an email.',
    address: '27 Division St, New York, NY 10002, USA',
    phone: '+1 800 123 456 789',
    email: 'bili@mail.com',
  },
  socialLinks: [
    {
      platform: 'Twitter',
      url: 'https://twitter.com/',
      icon: 'fab fa-twitter',
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/',
      icon: 'fab fa-facebook-f',
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/',
      icon: 'fab fa-linkedin-in',
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/',
      icon: 'fab fa-instagram',
    },
  ],
};

const ContactSection = () => {
  return (
    <section className="wpcf7 elementor-section elementor-top-section">
      <div className="container">
        <div className='flex justify-between items-center'>
        {/* Contact Form Column */}
        <div className="elementor-widget-wrap bg-[#F5F5F5] ">
          <div className="">
            <div className="elementor-widget">
              <h3 className="text-2xl font-bold">{contactSectionData.title}</h3>
            </div>
            <div className="elementor-widget">
              <p>{contactSectionData.description}</p>
            </div>
            <form
              action="/bili/light/contacts/#wpcf7-f903-p850-o10"
              method="post"
              className="flex flex-col"
            >
              <input
                type="text"
                name="label-name"
                placeholder={contactSectionData.form.namePlaceholder}
                required
                className="border p-2 mb-4"
              />
              <input
                type="text"
                name="label-website"
                placeholder={contactSectionData.form.websitePlaceholder}
                className="border p-2 mb-4"
              />
              <textarea
                name="label-textarea"
                placeholder={contactSectionData.form.commentPlaceholder}
                className="border p-2 mb-4"
              />
              <button
                type="submit"
                className="no-underline text-gray-600 wgl-button relative px-8 py-3 z-1 font-semibold rounded-full  transition-all duration-300"
              >
                {contactSectionData.form.submitButtonText}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Details Column */}
        <div className="elementor-column elementor-col-50">
          <div className="elementor-widget-wrap">
            <div className="elementor-widget">
              <h4 className="font-semibold"> <span className='text-[#FF7425] text-[14px] font-bold'>{contactSectionData.contacts.header}</span></h4>
              <h3 className="text-xl font-bold">{contactSectionData.contacts.subHeader}</h3>
            </div>
            <div className="elementor-widget">
              <p>{contactSectionData.contacts.description}</p>
            </div>
            <div className="elementor-widget">
              <ul className="list-none">
                <li>{contactSectionData.contacts.address}</li>
                <li>
                  <a href={`tel:${contactSectionData.contacts.phone}`}>{contactSectionData.contacts.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${contactSectionData.contacts.email}`}>{contactSectionData.contacts.email}</a>
                </li>
              </ul>
            </div>
            <div className="elementor-widget">
              <div className="flex space-x-4">
                {contactSectionData.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg"
                    title={link.platform}
                  >
                    <i className={link.icon}></i>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
