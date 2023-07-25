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
    console.log(iconName);
  };

  const handleIconLeave = () => {
    setHoveredIcon(null);
  };
  const copyNumber=()=>{
    const textToCopy = document.getElementById('phNumber').innerText;

            // Create a temporary input element to hold the text
            const tempInput = document.createElement('input');
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);

            // Select the text inside the input
            tempInput.select();

            // Copy the selected text to the clipboard
            document.execCommand('copy');

            // Remove the temporary input element
            document.body.removeChild(tempInput);

            // Notify the user that the text has been copied (optional)
            alert('Copied! Contact Us now ' + textToCopy);
  }

  return (
    <>
    <div data-aos='zoom-in-left'>
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

          <div  className="item contact-img-container">
            <img  src="assets/Home/ContactUsAsset.png" alt="" />
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
          <div className="icon-details" onClick={handleMapClick}> Mgiants International PVT LTD </div>
        </div>
        <div
          className={`icon${hoveredIcon === 'phone' ? ' active' : ''} `}
          onMouseEnter={() => handleIconHover('phone')}
          onMouseLeave={handleIconLeave}
        >
          {hoveredIcon !== 'phone' && <i className="fa-solid fa-phone contact-icons"></i>}
          <div onClick={copyNumber}  id='phNumber' className="icon-details">+91-7017170642</div>
        </div>
        <div
          className={`icon${hoveredIcon === 'mail' ? ' active' : ''}`}
          onMouseEnter={() => handleIconHover('mail')} 
          onMouseLeave={handleIconLeave}
        >
          {hoveredIcon !== 'mail' && <i className="fa-solid fa-envelope contact-icons"></i>}
          <a href='mailto:info@mgiants.com' target='_blank' className="icon-details">info@mgiants.com</a>
        </div>
      </div>
    </div>
      
    </>
  );
};

export default Contactus;
