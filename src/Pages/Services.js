import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../client';
import TalkAboutDesignSection from './Services/TalkAboutDesignSection';
import CounterSection from '../Component/CounterSection'; // Your local component
import PhilosophySection from './Services/PhilosophySection';
import BenefitsSection from './Services/BenefitsSection'; // Import the BenefitsSection
import FeaturesSection from '../Component/FeaturesSection';
// import GetInTouch from './Services/GetInTouch';
import GetInTouch from '../Component/GetInTouch';
import featuresData from '../Data/FeaturesData.json';
import FlipboxGrid from './Services/FlipboxGrid';
const componentMap = {
  layoutComponent: TalkAboutDesignSection,
  customComponent: PhilosophySection,
  'customComponent-2': BenefitsSection, // Use the exact content type ID
};

const Services = () => {
  const { slug } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: 'servicesLanding',
          'fields.slug': slug,
          include: 2, // Ensure linked entries are included
        });

        console.log("Service Data:", response);

        if (response.items.length > 0) {
          setData(response.items[0].fields);
        }
      } catch (error) {
        console.error('Error fetching data from Contentful:', error);
      }
    };

    fetchData();
  }, [slug]);

  if (!data) return <div>Loading...</div>;

  return (
    <div>
      {/* <h1 className="text-3xl font-bold">{data.title}</h1> */}
      {data.sections.map((section, index) => {
        const contentTypeId = section.sys.contentType.sys.id;
        const ComponentToRender = componentMap[contentTypeId];

        console.log("Rendering section:", section);

        return ComponentToRender ? (
          <React.Fragment key={index}>
            <ComponentToRender data={section.fields} />
            {/* Render CounterSection after layoutComponent */}
            {contentTypeId === 'layoutComponent' && <CounterSection />}

          </React.Fragment>
        ) : (
          <div key={index}>Unknown section type</div>
        );
      })}
      <FeaturesSection data={featuresData.services} />
      <GetInTouch />
      <FlipboxGrid />

    </div>
  );
};

export default Services;
