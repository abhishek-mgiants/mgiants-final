import './WebDevelopment.css'
const WebDevelopment = (props) => {
    return (
        <>
        <button className='back-button' onClick={props.handleBackClick} >
              <i className="fa-solid fa-circle-left"></i>
              </button> 
            <div className="web-container">
                <div className="web-content-container">
                <div className="heading">
                    <p>Web Development</p>
                </div>
                <div className="items">Website Hosting</div>
                <div className="items">Website Design</div>
                </div>
        </div>
        </>
    );
  };
  
  export default WebDevelopment;
  
