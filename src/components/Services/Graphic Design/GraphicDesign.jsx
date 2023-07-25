import  { useState } from 'react';
import './GraphicDesign.css';

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
      <div className="graphic-container">
        <div className="graphic-content-container">
          <div className="graphic-heading">
            <p>Graphic Design</p>
          </div>
          
          <div
            className="graphic-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Logo Design', description: 'A brand mark (logo) for your company is an unique identification mark.' },
                ],
                '2.28%'
              )
            }
          >
            Logo Design
          </div>
          <div
            className="graphic-items"
            onClick={() =>
              handleItemClick(
                [
                  { id: 1, title: 'Editorial', description: 'The creation and production of all kinds of editorial publications, such as magazines and brochure.' },
                ],
                '52%'
              )
            }
          >
            Editorial
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-backdrop" onClick={handleModalClose}>
          <div className="graphicmodal" style={style}>
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
