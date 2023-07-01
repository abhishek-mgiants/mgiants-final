import React, { useState } from 'react';
import './Alpha.css'; // Import the CSS file for styling

import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';
import NavBar from './components/NavBar';
import Services2 from './components/Services/Services2';
import Clients from './components/Clients/Clients';
import Home from './components/Home/Home';

const Alpha = () => {
  const components = [
    { id: 1, name: 'Home', component: <Home /> },
    { id: 2, name: 'About Us', component: <AboutUs /> },
    { id: 3, name: 'Services', component: <Services2 /> },
    { id: 4, name: 'Clients', component: <Clients /> },
    { id: 5, name: 'Contact Us', component: <ContactUs /> },
  ];

  const [currentComponent, setCurrentComponent] = useState(components[0]);
  const [buttonText, setButtonText] = useState('Start');
  const [fadeIn, setFadeIn] = useState(true);

//   const handleButtonClick = () => {
//     const currentIndex = currentComponent.id - 1;
//     const nextIndex = (currentIndex + 1) % components.length;

//     setFadeIn(false); // Trigger fade-out animation
//     setTimeout(() => {
//       setCurrentComponent(components[nextIndex]);
//       setFadeIn(true); // Trigger fade-in animation
//     }, 500); // Delay to allow fade-out animation to complete

//     if (nextIndex === 0) {
//       setButtonText('Start');
//     } else {
//       setButtonText('Next');
//     }
//   };
const handleButtonClick = (id) => {
    const selectedComponent = components.find((component) => component.id === id);
    // setCurrentComponent(selectedComponent);
        setFadeIn(false); // Trigger fade-out animation
    setTimeout(() => {
       setCurrentComponent(selectedComponent);
      setFadeIn(true); // Trigger fade-in animation
    }, 300); // Delay to allow fade-out animation to complete
  };

  return (
    <div className="alpha-container">
      <div
        className={`component-container ${fadeIn ? 'fade-in' : 'fade-out'}`}
      >
        {currentComponent.component}
        <div className="buttons-container">
        {components.map((component) => (
          <button
            key={component.id}
            className={`component-button ${
              component.id === currentComponent.id ? 'active' : ''
            }`}
            onClick={() => handleButtonClick(component.id)}
          >
            {component.name}
          </button>
        ))}
      </div>
      </div>

      {/* <button className="start-button" onClick={handleButtonClick}>
        {currentComponent.name}
      </button> */}
     
    </div>
  );
};

export default Alpha;
