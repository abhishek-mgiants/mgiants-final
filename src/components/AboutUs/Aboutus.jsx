import './AboutUs.css'
import OurTeam from '../OurTeam/OurTeam'
import MgiantsInfo from '../Mgiants-info/MgiantsInfo'
import { useState,useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Aboutus = () => {
  AOS.init({duration:1000})
  
  const [showInfo, setShowInfo]=useState(true);
  const [showMgiants, setShowMgiants]= useState(false);
  const [showOurTeam, setShowOurTeam]= useState(false);

  const handleMgiantsClick=()=>{
    setShowInfo(!showInfo);
    setShowMgiants(!showMgiants);
  }
  const handleOurTeamClick=()=>{
    setShowInfo(!showInfo);
    setShowOurTeam(!showOurTeam); 
  }
  const handleShowInfo=()=>{ 
    setShowInfo(!showInfo);
    setShowMgiants(false);
    setShowOurTeam(false);
  }

  return (
   <>
   
  {
    showMgiants && <div style={{height:'100vh'}}>
      
      <MgiantsInfo handleBackClick={handleShowInfo}/>
      
      
    </div>
  }
   {
    showOurTeam && <div style={{height:'100vh', position:'relative'}}>
      
      <OurTeam handleBackClick={handleShowInfo} />
      {/* <button onClick={handleShowInfo} >
              <i className="fa-solid fa-circle-left"></i>
              </button> */}
      
    </div>
  }
  
   {showInfo && <div className='about-container' >
          <div className='about-content-container' >
              <div data-aos="fade-right"  className='item about-left'>
                 
                 <div className='mg'>
                 <img className='about-img ' onClick={handleMgiantsClick} src="assets/AboutUs/mgiantsSky.jpg" alt="" />
                 <div className='aboutUs-overlay1'>
                   <p>Mgiants International</p>
                  </div>
                 </div>
              </div>
              <div data-aos="fade-left" className='item about-right'>
                  <div className='ot'>
                  <img className='about-img' onClick={handleOurTeamClick} src="assets/AboutUs/meetteam.png" alt="" />

                  <div className='aboutUs-overlay1'>
                   <p>Our Team</p>
                  </div>
                  </div>
        </div>
           
          </div>
    </div>}
   </>
  )
}

export default Aboutus