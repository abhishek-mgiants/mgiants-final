import './Branding.css'
const Branding = (props) => {
    return (
        <>
        <button className='back-button' onClick={props.handleBackClick} >
              <i className="fa-solid fa-circle-left"></i>
              </button>
            <div className="branding-container">
                <div className="branding-content-container">
                <div className="items heading">
                    <p>Branding</p>
                </div> 
                <div className="items">Brand Name</div>
                <div className="items">Brand Identity Elements</div>
                <div className="items">Brand Style Guide</div>
                
                </div>
        </div>
        </>
    );
  };
  
  export default Branding;
  
