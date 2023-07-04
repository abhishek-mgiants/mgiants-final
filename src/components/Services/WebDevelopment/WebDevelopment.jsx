import  { useState } from 'react';
import './WebDevelopment.css';

const WebDevelopment = (props) => {
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
      <div className="webdev-container">
        <div className="webdev-content-container">
          <div className="webdev-heading">
            <p>Web Development</p>
          </div>
          
          <div
            className="webdev-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Social Media Marketing', description: 'Promoting products and services on social media platforms' },
                  { id: 2, title: 'Email Marketing', description: 'Sending targeted emails to a specific audience' },
                ],
                '2.29%'
              )
            }
          >
            Web Development
          </div>
          <div
            className="webdev-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Pay-per-Click Advertising', description: 'Paying for ads based on clicks received' },
                  { id: 2, title: 'Display Advertising', description: 'Promoting products or services through visual ads' },
                ],
                '50%'
              )
            }
          >
            Web Hosting
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

export default WebDevelopment;
