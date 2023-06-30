import './GraphicDesign.css'
const GraphicDesign = (props) => {
    return (
        <>
           <button className='back-button' onClick={props.handleBackClick} >
              <i className="fa-solid fa-circle-left"></i>
              </button>
            <div className="graphic-container">
                <div className="graphic-content-container">
                <div className="heading">
                    <p>Graphic Design</p>
                </div>
                <div className="items">Logo Design</div>
                <div className="items">Editorial</div>
                </div>
        </div>
        </>
    );
  };
  
  export default GraphicDesign;
  
