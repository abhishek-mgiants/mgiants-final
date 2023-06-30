import React from 'react';
import PropTypes from 'prop-types';
import './MainComponentRenderer.css';
import NavBar from './NavBar';
// import NewHome from './NewHome/NewHome';
import Aboutus from './AboutUs/Aboutus';
import Services2 from './Services/Services2';
import Clients  from   './Clients/Clients'
import Contactus from './ContactUs/Contactus';
import Home from './Home/Home';

function FadeInSection(props) {
  const [isVisible, setISVisible] = React.useState(true);
  const domRef = React.useRef();
    
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setISVisible(entry.isIntersecting));
    });
    const { current } = domRef;
    observer.observe(current);                
    return () => observer.unobserve(current);
  }, []);

  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {props.children}
    </div>
  );
}

const MainComponentRenderer = () => {
 

  return (
    <div className="main-rendering-container"> 
          <FadeInSection> 
        <div id="home">
        <Home/>
              </div>
          </FadeInSection>
          <FadeInSection>
              <div id='#aboutUs'  style={{height:'100vh'}}  >
              <Aboutus/>
              <NavBar/>
              </div>
          </FadeInSection>
          <FadeInSection>
          <div id='services'  >
          <Services2 />
              <NavBar/>
                  </div>
          </FadeInSection>
          <FadeInSection>
          <div id='clients'  >
          <Clients />
              <NavBar/>
                  </div>
          </FadeInSection>
          <FadeInSection>
              <div id='contactus' >
                  <Contactus/>
              </div>
          </FadeInSection>
    </div>
  );
};


export default MainComponentRenderer;
FadeInSection.propTypes = {
  children: PropTypes.node,
  };