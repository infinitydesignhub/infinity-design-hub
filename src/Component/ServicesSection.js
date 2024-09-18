// import React from 'react';

// const data = {
//   sectionTitle: "WHAT WE OFFER",
//   mainHeading: "Giving Your Business Some Great Ideas",
//   services: [
//     {
//       id: 1,
//       number: "01",
//       title: "UI/UX Experience",
//       description:
//         "Our expertise, as well as our passion for web design, sets us apart from other agencies. Plus, our experience demonstrates our ability."
//     },
//     {
//       id: 2,
//       number: "02",
//       title: "Web Development",
//       description:
//         "Our expertise, as well as our passion for web design, sets us apart from other agencies. Plus, our experience demonstrates our ability."
//     },
//     {
//       id: 3,
//       number: "03",
//       title: "Digital Marketing",
//       description:
//         "Our expertise, as well as our passion for web design, sets us apart from other agencies. Plus, our experience demonstrates our ability."
//     },
//     {
//       id: 4,
//       number: "04",
//       title: "Product Design",
//       description:
//         "Our expertise, as well as our passion for web design, sets us apart from other agencies. Plus, our experience demonstrates our ability."
//     }
//   ],
//   buttonText: "MORE SERVICES",
//   buttonLink: "https://wgl-dsites.net/bili/light/services/"
// };

// const ServicesSection = () => {
//   return (
//     <section className="py-12 bg-gray-50">
//       <div className="container mx-auto">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Left side: Title and button */}
//           <div className="text-left flex flex-col justify-center">
//             <div>
//               <span className="text-sm font-semibold text-gray-500">{data.sectionTitle}</span>
//               <h3 className="text-3xl font-bold text-gray-900 mt-2">{data.mainHeading}</h3>
//             </div>
//             <div className="mt-6">
//               <a
//                 href={data.buttonLink}
//                 className="px-6 py-3 bg-blue-600 text-white text-lg rounded hover:bg-blue-700"
//               >
//                 {data.buttonText}
//               </a>
//             </div>
//           </div>

//           {/* Right side: Services */}
//           <div className="grid grid-cols-2 gap-6">
//             {data.services.map((service) => (
//               <div key={service.id} className="text-left p-6 border border-gray-200 rounded-lg bg-white">
//                 <div className="mb-4">
//                   <span className="text-4xl text-gray-500">{service.number}</span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const ServicesSection = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Left Content Section */}
          <div
            className="flex flex-col col-md-8 px-6"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="text-orange-600 font-semibold text-lg mb-2">
              WHAT WE OFFER
            </h2>
            <h1 className="text-4xl font-bold mb-6">
              Giving Your Business Some Great Ideas
            </h1>
            <a
              href="/services"
              className="text-white bg-gray-800 py-3 px-6 rounded-full inline-block mt-4 hover:bg-gray-700 transition"
            >
              MORE SERVICES
            </a>
          </div>

          {/* Right Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Service Box 01 */}
            <div
              className="border p-6 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
            >
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-400">01</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">UI/UX Experience</h3>
              <p className="text-gray-600">
                Our expertise, as well as our passion for web design, sets us
                apart from other agencies. Plus, our experience demonstrates our
                ability.
              </p>
            </div>

            {/* Service Box 02 */}
            <div
              className="border p-6 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-400">02</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Web Development</h3>
              <p className="text-gray-600">
                Our expertise, as well as our passion for web design, sets us
                apart from other agencies. Plus, our experience demonstrates our
                ability.
              </p>
            </div>

            {/* Service Box 03 */}
            <div
              className="border p-6 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="1000"
            >
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-400">03</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Digital Marketing</h3>
              <p className="text-gray-600">
                Our expertise, as well as our passion for web design, sets us
                apart from other agencies. Plus, our experience demonstrates our
                ability.
              </p>
            </div>

            {/* Service Box 04 */}
            <div
              className="border p-6 rounded-lg shadow-lg"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-400">04</span>
              </div>
              <h3 className="text-2xl font-semibold mb-4">Product Design</h3>
              <p className="text-gray-600">
                Our expertise, as well as our passion for web design, sets us
                apart from other agencies. Plus, our experience demonstrates our
                ability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;


