
import './Home.css'
const Home = () => {
  const handleHomeCta=()=>{
      window.location.href='#aboutUs'
  }
  const handleWhatsAppClick=()=>{
    window.location.href="https://wa.me/917017170642"
  }
  const handleLinkedInClick=()=>{
    window.location.href="https://www.linkedin.com/company/mgiants-international/?viewAsMember=true"
  }
  const handleInstaClick=()=>{
    window.location.href="https://instagram.com/mgiantsinternational?igshid=MmU2YjMzNjRlOQ=="
  }
  const handleFacebookClick=()=>{
    window.location.href="https://www.facebook.com/profile.php?id=100091805007158"
  }
  return (
   
    <div className='main-home-container'>
          
          <div className='image-container'>
        
              <div className="icon-item first">
              <button onClick={handleWhatsAppClick} className='whatsapp-btn'><i className="fa-brands fa-whatsapp fa-2xl"></i></button>
              </div>
              <div className="icon-item second">
              <button onClick={handleLinkedInClick} className='linkedin-btn' ><i className="fa-brands fa-linkedin"></i></button>
              </div>
              <div className="icon-item third">
              <button onClick={handleInstaClick} ><i className="fa-brands fa-instagram"></i></button>
              </div>
              <div className="icon-item fourth">
              <button onClick={handleFacebookClick} className='facebook-btn'><i className="fa-brands fa-facebook "></i></button>  
              </div>

          </div>

          <div className='home-info-container'>
        <div className="mgiants-logo">
          <img src="https://github.com/abhishek-mgiants/mgiants-final/blob/master/src/assets/logoFormats-03.png?raw=true" alt="" />
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
