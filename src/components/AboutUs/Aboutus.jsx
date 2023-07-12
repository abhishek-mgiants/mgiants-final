import './AboutUs.css'
import OurTeam from '../OurTeam/OurTeam'
import MgiantsInfo from '../Mgiants-info/MgiantsInfo'
import { useState,useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Aboutus = () => {
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
    showOurTeam && <div style={{height:'100vh'}}>
      
      <OurTeam />
      <button onClick={handleShowInfo} style={{color:'cyan', fontSize:'30px', fontWeight:'bolder'}}>
              <i className="fa-solid fa-circle-left"></i>
              </button>
      
    </div>
  }
  
   {showInfo && <div className='about-container' >
          <div className='about-content-container' >
              <div  className='item about-left'>
                  <img className='about-img' onClick={handleMgiantsClick} src="https://github.com/abhishek-mgiants/mgiants-final/blob/master/src/assets/mgiantsSky.jpg?raw=true" alt="" />
              </div>
              <div className='item about-right'>
                  <img className='about-img' onClick={handleOurTeamClick} src="https://github.com/abhishek-mgiants/mgiants-final/blob/master/src/assets/meetteam.png?raw=true" alt="" />
        </div>
           
          </div>
    </div>}
   </>
  )
}

export default Aboutus