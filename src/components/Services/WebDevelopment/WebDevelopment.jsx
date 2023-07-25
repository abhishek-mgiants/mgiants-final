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
                  { id: 1, title: 'Web Design', description: 'A process of planning, conceptualizing, and implementingthe plan for designing a website in a way that is functional and offers a good user experience.' },
                
                ],
                '2.29%'
              )
            }
          >
            Web Design
          </div>
          <div
            className="webdev-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Web Hosting', description: 'The facilities required to create and maintain a site and makes it accessible on the World Wide Web.' },
                
                ],
                '60%'
              )
            }
          >
            Web Hosting
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={handleModalClose}>
          <div className="webmodal" style={style}>
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
