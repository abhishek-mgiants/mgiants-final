import './NewHome.css'

const NewHome = () => {
  function handlerConnectClick() {
    window.location.href = '/#aboutUs'; 
  }
  return (
    
    <div className="home-container">
    <div className="home-content-container">
              <div className="item hero-img">
          <div className="icons">
            
                  </div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  <div className="icons"></div>
                  
                  <div className="icons">
                    <button><i className="fa-brands fa-whatsapp fa-2xl"></i></button>
                  </div> 
                  <div className="icons ">
                  </div>

          <div className="icons">
            
                  </div>
          <div className="icons">
          <button ><i className="fa-brands fa-linkedin"></i></button>
                  </div>
                  <div className="icons"></div>

                  <div className="icons ">
                    <button><i className="fa-brands fa-instagram"></i></button>
                  </div>
                  <div className="icons ">
                   
                  </div>

                  <div className="icons"></div>
          <div className="icons">
          <button><i className="fa-brands fa-facebook "></i></button>
                  </div>
          <div className="icons">
          
          </div>    
              </div>
              {/* Side content */}
              <div className="item content-item">
                <div className='content-logo'>
                  <img className='logoImg' src="src/assets/logoFormats-03.png" alt="" />
                </div>
                <div  className="content-heading">
                <h2 className="text-5xl text-cyan-500 ">
                    We Strategies and create <br/>
                    the most innovative solutions
                  </h2>
                </div>
                <div className="connectBtn">
                <button onClick={handlerConnectClick} className="connect-button">
                     Lets Connect
                  </button> 
                </div>  
              </div>
    </div>
    </div>
  )
}

export default NewHome
