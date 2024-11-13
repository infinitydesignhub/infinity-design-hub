import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import client from '../client';
import TalkAboutDesignSection from './Services/TalkAboutDesignSection';
import CounterSection from '../Component/CounterSection'; // Your local component
import PhilosophySection from './Services/PhilosophySection';
import BenefitsSection from './Services/BenefitsSection'; // Import the BenefitsSection
import FeaturesSection from '../Component/FeaturesSection';
import featuresData from '../Data/FeaturesData.json';
import FlipboxGrid from './Services/FlipboxGrid';
import TextPath from '../Component/TextPath';
import DynamicSection from './Services/DynamicSection';

const componentMap = {
  layoutComponent: TalkAboutDesignSection,
  customComponent: PhilosophySection,
  'customComponent-2': BenefitsSection, // Use the exact content type ID
  contactUs: DynamicSection, // Ensure this is last in rendering logic
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

        // console.log("Service Data:", response); // Log the response

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
      {/* Render all sections first */}
      {data.sections.map((section, index) => {
        const contentTypeId = section.sys.contentType.sys.id;
        
        // Check if the section is contactUs
        if (contentTypeId === 'contactUs') {
          return null; // Skip rendering here
        }

        const ComponentToRender = componentMap[contentTypeId];

        return (
          <React.Fragment key={index}>
            {ComponentToRender ? (
              <>
                <ComponentToRender data={section.fields} />
                {contentTypeId === 'layoutComponent' && <CounterSection />}
              </>
            ) : (
              <div>Unknown section type</div>
            )}
          </React.Fragment>
        );
      })}

     

      {/* Other components that should appear before DynamicSection */}
      <TextPath />
      <FlipboxGrid />
      <FeaturesSection data={featuresData.services} />
       {/* Render the DynamicSection last */}
       {data.sections.map((section, index) => {
        const contentTypeId = section.sys.contentType.sys.id;

        if (contentTypeId === 'contactUs') {
          return <DynamicSection key={index} data={section.fields} />;
        }

        return null; // Skip rendering if not contactUs
      })}
    </div>
  );
};

export default Services;
