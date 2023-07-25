import  { useState } from 'react';
import './AppDevelopment.css';

const AppDevelopment = (props) => {
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
      <button className='back-button' onClick={props.handleBackClick} >
              <i className="fa-solid fa-circle-left"></i>
              </button>
      <div className="appdeve-container">
        <div className="appdeve-content-container">
          <div className="heading">
            <p>App Development</p>
          </div>
        
          <div
            className="appdeve-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'iOS', description: 'Creating applications for devices that run on the Iphone Operating platform.' },
                ],
                '10%'
              )
            }
          >
            iOS development
          </div>
          <div
            className="appdeve-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Android', description: 'Creating applications for devices that run on the Android platform.' },
                ],
                '60%'
              )
            }
          >
            Android development
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={handleModalClose}>
          <div className="appmodal" style={style}>
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

export default AppDevelopment;
