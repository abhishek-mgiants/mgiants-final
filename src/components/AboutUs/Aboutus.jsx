import './AboutUs.css'
import OurTeam from '../OurTeam/OurTeam'
import MgiantsInfo from '../Mgiants-info/MgiantsInfo'
import { useState } from 'react'
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
              <div className='item about-left'>
                  <img className='about-img' onClick={handleMgiantsClick} src="src/assets/mgiantsSky.jpg" alt="" />
              </div>
              <div className='item about-right'>
                  <img className='about-img' onClick={handleOurTeamClick} src="src/assets/meetteam.png" alt="" />
        </div>
           
          </div>
    </div>}
   </>
  )
}

export default Aboutus