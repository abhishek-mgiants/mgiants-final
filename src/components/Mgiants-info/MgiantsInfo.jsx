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
          <div className="heading">
            <p>Mgiants International</p>
          </div>
          <div
            className="mgiantsInfo-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Our Vision', description: 'Text' },
                  
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
                  { id: 1, title: 'Our Mission', description: 'Text' },
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
                  { id: 1, title: 'Ravi sir', description: 'Image and Text' },
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
          <div className="modal" style={style}>
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
