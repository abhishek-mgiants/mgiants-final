import  { useState } from 'react';
import './MgiantsInfo.css'

const MgiantsInfo = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [bannerContent, setBannerContent] = useState([]);
  const [triangleLeft, setTriangleLeft] = useState('2.28%');

  const handleItemClick = (content, position) => {
    setBannerContent(content);
    setShowModal(true);
    setTriangleLeft(position);
  }; 

  const handleModalClose = () => {
    setShowModal(false);
  };

  const style = {
    '--triangle-left': triangleLeft, 
  };

  return (
    <>
    <button className='mgiants-back-button'  onClick={props.handleBackClick} >
              <i className="fa-solid fa-circle-left"></i>
              </button>
      <div className="mgiantsInfo-container">
        <div className="mgiantsInfo-content-container">
          <div className="mgiants-heading">
            <p>Mgiants International</p>
          </div>
          <div
            className="mgiantsInfo-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Our Vision', description: 'At Mgiants International, we envision becoming the foremost catalyst for startup success worldwide. We aim to empower entrepreneurs with innovative digital marketing solutions, elevating their brand presence, and creating lasting impacts in the digital landscape.' },
                  
                ],
                '2.28%'
              )
            }
          >
           Our Vision
          </div> 
          <div
            className="mgiantsInfo-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Our Mission', description: 'Our mission at Mgiants International is twofold: to empower startups with digital marketing excellence and foster a strong online presence through top-notch web development. We strive to deliver tailored solutions that align with our clients unique needs, helping them reach their full potential. With a customer-centric approach, we aim to establish enduring partnerships, shaping a brighter future for startups globally.' },
                ],
                '50%' 
              )
            }
          >
            Our Mission
          </div>
          <div
            className="mgiantsInfo-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Ravikant Gola', description: 'As a young entrepreneur, I started early in my family business to gain hands-on experience and understand the real-world workings of a company. My time as the CEO of Golden Industries taught me invaluable lessons that will stay with me for life. Business is my passion, and I established my own company, Comunique World, driven by my insatiable hunger for success. Currently, as the CEO of Mgiants International, my focus is to make it the leading service provider for the future. I value a harmonious work environment, encourage my team, and believe in my ability to achieve great things through dedication and hard work.' },
                ],
                '90%'
              )
            }
          >
            Our CEO
          </div>
          
        </div>
        
      </div>
      

      {showModal && (
        <div className="modal-backdrop" onClick={handleModalClose}>
          <div className="mgiants-modal" style={style}>
            <div className="modal-content">
              <ul>
                {bannerContent.map((item) => (
                  <li key={item.id}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
      

    </>
  );
};

export default MgiantsInfo;
