import './AppDevelopment.css'
const AppDevelopment = (props) => {
    return (
        <>
        <button className='back-button' onClick={props.handleBackClick} >
              <i className="fa-solid fa-circle-left"></i>
              </button>
            <div className="appdev-container">
                <div className="content-container">
                <div className="items heading">
                    <p>App Development</p>
                </div>
                <div className="items">iOS</div>
                <div className="items">Android</div>
                
                 
                </div>
        </div>
        </>
    );
  };
  
  export default AppDevelopment;
  
