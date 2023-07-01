
import './Home.css'
const Home = () => {
  const handleHomeCta=()=>{
      window.location.href='#aboutUs'
  }
  return (
   
    <div className='main-home-container'>
          
          <div className='image-container'>
        
              <div className="icon-item first">
              <button className='whatsapp-btn'><i className="fa-brands fa-whatsapp fa-2xl"></i></button>
              </div>
              <div className="icon-item second">
              <button className='linkedin-btn' ><i className="fa-brands fa-linkedin"></i></button>
              </div>
              <div className="icon-item third">
              <button><i className="fa-brands fa-instagram"></i></button>
              </div>
              <div className="icon-item fourth">
              <button className='facebook-btn'><i className="fa-brands fa-facebook "></i></button>  
              </div>

          </div>

          <div className='home-info-container'>
        <div className="mgiants-logo">
          <img src="src/assets/logoFormats-03.png" alt="" />
        </div>
        <div className="catchy-line">
        <h2 className="text-5xl text-cyan-500 ">
                    We Strategies and create <br/>
                    the most innovative solutions
                  </h2>
        </div>
        <div className="home-aboutus-cta">
              <button onClick={handleHomeCta} > Lets Connect</button>
        </div>
          </div>
    </div>
  )
}

export default Home
