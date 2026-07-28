import React, { useContext } from 'react'
import Context from '../../context/Context'

// import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



const GamesShots = () => {
    const {screenshots} = useContext(Context)
  return (
    <>
    <div className="shot-container">
   

      <Swiper
      // install Swiper modules
      modules={[Navigation, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
       breakpoints={
        {
          1440: {
          slidesPerView:5
          },
          1024:{
             slidesPerView:4
          },
          768 :{
             slidesPerView:3
          },
          480:{
            slidesPerView:2
          },
          320:{
            slidesPerView:1
          }
      
      }
      }

    >
          {screenshots.map((game)=>(
            <SwiperSlide key={game.id}>
               <img src={game.image} alt="game shot"/>
            </SwiperSlide>
          ))}
    </Swiper>

     </div>
     </>
  )
 
}

export default GamesShots
