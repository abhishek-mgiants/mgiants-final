import  { useState } from 'react';
import './Contactus.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

const Contactus = () => {
  const handleMapClick=()=>{
    window.location.href="https://goo.gl/maps/Mnmf9JzgmoBPockx9";
  }
  AOS.init({duration:1000})
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleIconHover = (iconName) => {
    setHoveredIcon(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <>
      <div className="contact-container">
        <div className="contact-content-container">
          <div className="item contact-form-container">
            <form action="https://formspree.io/f/mrgwbkbp" method='POST' className="contact-form">
              <h1 className="form-heading">CONTACT US</h1>

              <label htmlFor="Name">Name:</label>
              <input type="text" name="Name" id="" />

              <label htmlFor="Email">Email:</label>
              <input type="email" name="Email" id="" />

              {/* <label htmlFor="Service">Select a Service:</label>
              <select name="Service" id="" style={{ marginBottom: '5px', marginTop: '20px' }}>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Branding">Branding</option>
                <option value="Web Development">Web Development</option>
                <option value="App Development">App Development</option>
                <option value="Graphic Design">Graphic Design</option>
              </select>
              <hr /> */}

              <label style={{marginBottom:'8px'}} htmlFor="Message">Share your thoughts:</label>
              <textarea name="Message" id="textmessage" cols="30" rows="4"></textarea>
              <input type="submit" />
            </form>
          </div>

          <div className="item contact-img-container">
            <img data-aos='zoom-in-left' src="https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/Home/ContactUsAsset.png?raw=true" alt="" />
          </div>
        </div>
      </div>
      <div className="contact-icons-container">
        <div
          className={`icon${hoveredIcon === 'location' ? ' active' : ''}`}
          onMouseEnter={() => handleIconHover('location')}
          onMouseLeave={handleIconLeave}
        >
          {hoveredIcon !== 'location' && <i className="fa-solid fa-location-dot contact-icons"></i>}
          <div className="icon-details" onClick={handleMapClick}> Mgiants International</div>
        </div>
        <div
          className={`icon${hoveredIcon === 'phone' ? ' active' : ''} `}
          onMouseEnter={() => handleIconHover('phone')}
          onMouseLeave={handleIconLeave}
        >
          {hoveredIcon !== 'phone' && <i className="fa-solid fa-phone contact-icons"></i>}
          <div className="icon-details">+91-7017170642</div>
        </div>
        <div
          className={`icon${hoveredIcon === 'mail' ? ' active' : ''}`}
          onMouseEnter={() => handleIconHover('mail')} 
          onMouseLeave={handleIconLeave}
        >
          {hoveredIcon !== 'mail' && <i className="fa-solid fa-envelope contact-icons"></i>}
          <div className="icon-details">info@mgiants.com</div>
        </div>
      </div>
    </>
  );
};

export default Contactus;
