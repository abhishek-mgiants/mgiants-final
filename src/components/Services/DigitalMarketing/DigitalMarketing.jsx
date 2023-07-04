import  { useState } from 'react';
import './DigitalMarketing.css';

const DigitalMarketing = (props) => {
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
      <div className="digital-container">
        <div className="digital-content-container">
          <div className="digital-heading">
            <p>Digital Marketing</p>
          </div>
          <div
            className="digital-items digital-seo"
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
            SEO
          </div> 
          <div
            className="digital-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Social Media Marketing', description: 'Promoting products and services on social media platforms' },
                  { id: 2, title: 'Email Marketing', description: 'Sending targeted emails to a specific audience' },
                ],
                '50%'
              )
            }
          >
            Social Media and Email Marketing
          </div>
          <div
            className="digital-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Pay-per-Click Advertising', description: 'Paying for ads based on clicks received' },
                  { id: 2, title: 'Display Advertising', description: 'Promoting products or services through visual ads' },
                ],
                '90%'
              )
            }
          >
            Paid Marketing
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

export default DigitalMarketing;
