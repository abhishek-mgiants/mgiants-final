import React from 'react';
import './Services.css';

// Sample data for services
const servicesData = [
  {
    id: 1,
    imgPath: 'https://source.unsplash.com/random/1', // Replace with actual image URLs from Unsplash
    heading: 'Service 1',
    description: 'Description of Service 1',
  },
  {
    id: 2,
    imgPath: 'https://source.unsplash.com/random/2',
    heading: 'Service 2',
    description: 'Description of Service 2',
  },
  {
    id: 3,
    imgPath: 'https://source.unsplash.com/random/3',
    heading: 'Service 3',
    description: 'Description of Service 3',
  },
  {
    id: 4,
    imgPath: 'https://source.unsplash.com/random/4',
    heading: 'Service 4',
    description: 'Description of Service 4',
  },

  // Add more service entries as needed
];

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="front">
        <img src={service.imgPath} alt="Service" />
      </div>
      <div className="back">
        <h2>{service.heading}</h2>
        <p>{service.description}</p>
      </div>
    </div>
  );
};

const ServicesContainer = () => {
  return (
    <div className="services-containernew">
      {servicesData.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

const Services = () => {
  return (
    <div className="services">
      <h1>Our Services</h1>
      <ServicesContainer />
    </div>
  );
};

export default Services;
