import  { useState } from 'react';
import { motion } from 'framer-motion';
import './Services2.css';
import DigitalMarketing from './DigitalMarketing/DigitalMarketing';
import Branding from "./Branding/Branding";
import AppDevelopment from "./App Development/AppDevelopment";
import WebDevelopment from "./WebDevelopment/WebDevelopment";
import GraphicDesign from "./Graphic Design/GraphicDesign";

const Services2 = () => {
  const [showComponent, setShowComponent]= useState(false);
  const [showServiceContainer, setShowServiceContainer]=useState(true);
  const servicesData = [
    { name: 'Digital Marketing', imgPath: 'https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/ServiceIcons/digitalicon.png?raw=true', id: 1, path: '/digitalmarketing' },
    { name: 'Graphic Design', imgPath: 'https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/ServiceIcons/graphicicon.png?raw=true', id: 2, path: '/graphicdesign' },
    { name: 'Web Development', imgPath: 'https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/ServiceIcons/webicon.png?raw=true', id: 3, path: '/webdevelopment' },
    { name: 'App Development', imgPath: 'https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/ServiceIcons/appicon.png?raw=true', id: 4, path: '/appdevelopment' },
    { name: 'Branding', imgPath: 'https://github.com/abhishek-mgiants/mgiants-final/blob/master/assets/ServiceIcons/brandicon.png?raw=true', id: 5, path: '/branding' }
  ];

  const initialIdArray = servicesData.map((image) => image.id);
  const [idArray, setIdArray] = useState(initialIdArray);

  const handleImageClick = (clickedId) => {
    const clickedIndex = idArray.indexOf(clickedId);
    if (clickedIndex !== -1) {
      const updatedIdArray = [...idArray];
      [updatedIdArray[0], updatedIdArray[clickedIndex]] = [updatedIdArray[clickedIndex], updatedIdArray[0]];
      setIdArray(updatedIdArray);
    }
  };

  const topId = idArray[0];
  const topImage = servicesData.find((image) => image.id === topId);
  const otherImages = idArray.slice(1).map((id) => servicesData.find((image) => image.id === id));

  const handleMainImageClick = () => {
    // const selectedImage = servicesData.find((image) => image.id === topId);
    // if (selectedImage) {
    //   window.location.href = selectedImage.path;
    // }
    setShowComponent(!showComponent);
    setShowServiceContainer(!showServiceContainer);
    
    
  };
  const handleShowComponent=()=>{
    setShowComponent(!showComponent);
    setShowServiceContainer(!showServiceContainer);
  }

  return ( 
    <>
      
      {
        showComponent && (
          <div className='component-modal'>
              {topImage.name==="Digital Marketing" && <DigitalMarketing handleBackClick={handleShowComponent} />}
              {topImage.name==="Graphic Design" && <GraphicDesign handleBackClick={handleShowComponent} />}
              {topImage.name==="Web Development" && <WebDevelopment handleBackClick={handleShowComponent}/>}
              {topImage.name==="App Development" && <AppDevelopment handleBackClick={handleShowComponent}/>}
              {topImage.name==="Branding" && <Branding handleBackClick={handleShowComponent}/>}
             
          </div>
        )
      }

    {
      showServiceContainer && (<div className="services-container">
       
      
      <div className="main-service-container"> 
      
        <motion.div
          className="main-service-img"
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.5 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleMainImageClick}
        > 
          <motion.img
            className="service-img"
            key={topImage.id}
            src={topImage.imgPath}
            alt={topImage.name}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
        </motion.div>
        <div className="main-service-description">
          <p className="image-name">{topImage.name.toUpperCase()}</p>
        </div>
      </div>
      <div className="services-items-container">
        {otherImages.map((image) => (
          <motion.div
            className="image"
            key={image.id}
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.5 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleImageClick(image.id)}
          >
            <div className="image-overlay">
              <p className="image-name">{image.name}</p>
            </div>
            <motion.img
              className="services-items"
              key={image.id}
              src={image.imgPath}
              alt={image.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        ))}
         
      </div>
     
    </div>)
    }
    </>
  );
};

export default Services2;
