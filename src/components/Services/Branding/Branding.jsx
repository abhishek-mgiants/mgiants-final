import  { useState } from 'react';
import './Branding.css';

const Branding = (props) => {
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
      <div className="branding-container">
        <div className="branding-content-container">
          <div className="branding-heading">
            <p>Branding</p>
          </div>
          <div
            className="branding-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Brand Name', description: 'A name legally registered as a trademark, used by a manufacturer or merchant to identify its products distinctively.' },
                ],
                '2.28%'
              )
            }
          >
            Brand Name
          </div> 
          <div
            className="branding-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Brand Identity Items', description: 'Brand elements are the unique aspects of your brand, like name, logo, color schemes, etc, that create a cohesive, recognizable image for your business and extend into everything you create.' },
                ],
                '50%'
              )
            }
          >
            Brand Identity Elements
          </div>
          <div
            className="branding-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Brand Style Guide', description: 'A brand style guide is a holistic set of standards that defines your companys branding.' },
                
                ],
                '80%'
              )
            }
          >
            Brand Style Guide
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={handleModalClose}>
          <div className="brandmodal" style={style}>
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

export default Branding;
