import './MainComponent.css'
import Aboutus from './components/AboutUs/Aboutus'
import Contactus from './components/ContactUs/Contactus'
import NavBar from './components/NavBar'

import Services2 from './components/Services/Services2'
import Clients from './components/Clients/Clients'
import Home from './components/Home/Home'

const MainComponent = () => {
  return (
    <div className="main-components">
        <div className="scroll-snap" id="home">
          <Home/>
        </div>
        <div className="scroll-snap" id="aboutUs">
          <Aboutus/>
          <NavBar/>
        </div>
        <div  className="scroll-snap" id="services">
          <Services2/>
          <NavBar />
        </div>
        <div  className="scroll-snap" id="clients">
          <Clients/>
          <NavBar />
        </div>
        <div className="scroll-snap" id="contactus">
          <Contactus/>
        </div>
      </div>
  )
}

export default MainComponent