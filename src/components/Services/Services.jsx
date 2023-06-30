import './Services.css'; 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
const Services = () => {
  return (
    <div>
    <Swiper
  spaceBetween={0}
  slidesPerView={5}
  onSlideChange={() => console.log('slide change')}
  onSwiper={(swiper) => console.log(swiper)}
>
        <SwiperSlide>
          <div className='services-container'>
            <div className='topcard'>
              <img src="src/assets/mascot.jpg" alt="" />
              <a href="#">
              <h1 className='productName' >Digital Marketing</h1>
              </a>
            
          </div>
          <ul>
            <li>Seo</li>
            <li>Email marketing</li>
          </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='services-container'>
            <div className='topcard'>
              <img src="src/assets/mascot.jpg" alt="" />
              <a href="#">
              <h1 className='productName' >Digital Marketing</h1>
              </a>
            
          </div>
          <ul>
            <li>Seo</li>
            <li>Email marketing</li>
          </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='services-container'>
            <div className='topcard'>
              <img src="src/assets/mascot.jpg" alt="" />
              <a href="#">
              <h1 className='productName' >Digital Marketing</h1>
              </a>
            
          </div>
          <ul>
            <li>Seo</li>
            <li>Email marketing</li>
          </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='services-container'>
            <div className='topcard'>
              <img src="src/assets/mascot.jpg" alt="" />
              <a href="#">
              <h1 className='productName' >Digital Marketing</h1>
              </a>
            
          </div>
          <ul>
            <li>Seo</li>
            <li>Email marketing</li>
          </ul>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='services-container'>
            <div className='topcard'>
              <img src="src/assets/mascot.jpg" alt="" />
              <a href="#">
              <h1 className='productName' >Digital Marketing</h1>
              </a>
            
          </div>
          <ul>
            <li>Seo</li>
            <li>Email marketing</li>
          </ul>
          </div>
        </SwiperSlide>  
</Swiper>
</div>
    
  );
}
export default Services;