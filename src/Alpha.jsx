import React, { useState } from 'react';
import './Alpha.css'; // Import the CSS file for styling

import Aboutus from './components/AboutUs/Aboutus';
import ContactUs from './components/ContactUs/Contactus';
import NavBar from './components/NavBar';
import Services2 from './components/Services/Services2';
import Clients from './components/Clients/Clients';
import Home from './components/Home/Home';

const Alpha = () => {
  const components = [
    { id: 1, name: 'Home', component: <Home /> },
    { id: 2, name: 'About Us', component: <Aboutus /> },
    { id: 3, name: 'Services', component: <Services2 /> },
    { id: 4, name: 'Clients', component: <Clients /> },
    { id: 5, name: 'Contact Us', component: <ContactUs /> },
  ];

  const [currentComponent, setCurrentComponent] = useState(components[0]);
  const [buttonText, setButtonText] = useState('Start');
  const [fadeIn, setFadeIn] = useState(true);

  const handleButtonClick = (id) => {
    const selectedComponent = components.find((component) => component.id === id);
    setFadeIn(false); // Trigger fade-out animation
    setTimeout(() => {
      setCurrentComponent(selectedComponent);
      setFadeIn(true); // Trigger fade-in animation
    }, 300); // Delay to allow fade-out animation to complete
  };

  return (
    <div className="alpha-container">
      {window.innerWidth > 600 ? (
        <div className={`component-container ${fadeIn ? 'fade-in' : 'fade-out'}`}>
          {currentComponent.component}
          <div className="buttons-container">
            {components.map((component) => (
              <button
                key={component.id}
                className={`component-button ${component.id === currentComponent.id ? 'active' : ''}`}
                onClick={() => handleButtonClick(component.id)}
              >
                {component.name}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div className="mobile-message">
          <img src="https://github.com/abhishek-mgiants/mgiants-final/blob/master/src/assets/logoFormats-03.png?raw=true" alt="" />
          We must request you to find a larger screen. <br/> You won't be disappointed</div>
      )}
    </div>
  );
};

export default Alpha;
