import  { useState } from 'react';
import './Contactus.css';

const Contactus = () => {
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
            <form action="" className="contact-form">
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

              <label htmlFor="Message">Share your thoughts:</label>
              <textarea name="Message" id="textmessage" cols="30" rows="4"></textarea>
              <input type="submit" />
            </form>
          </div>

          <div className="item contact-img-container">
            <img src="src/assets/ContactUsAsset.png" alt="" />
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
          <div className="icon-details">Mgiants </div>
        </div>
        <div
          className={`icon${hoveredIcon === 'phone' ? ' active' : ''} `}
          onMouseEnter={() => handleIconHover('phone')}
          onMouseLeave={handleIconLeave}
        >
          {hoveredIcon !== 'phone' && <i className="fa-solid fa-phone contact-icons"></i>}
          <div className="icon-details">Phone number</div>
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
