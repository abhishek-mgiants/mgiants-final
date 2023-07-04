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
                  { id: 1, title: 'SEO', description: 'Search Engine Optimization' },
                  { id: 2, title: 'Content Marketing', description: 'Creating and distributing valuable content' },
                ],
                '2.28%'
              )
            }
          >
            
          </div> 
          <div
            className="appdeve-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Social Media Marketing', description: 'Promoting products and services on social media platforms' },
                  { id: 2, title: 'Email Marketing', description: 'Sending targeted emails to a specific audience' },
                ],
                '30%'
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
                  { id: 1, title: 'Pay-per-Click Advertising', description: 'Paying for ads based on clicks received' },
                  { id: 2, title: 'Display Advertising', description: 'Promoting products or services through visual ads' },
                ],
                '80%'
              )
            }
          >
            Android development
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

export default AppDevelopment;
