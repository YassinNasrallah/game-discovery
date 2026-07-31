import React, { useContext } from 'react'
import Context from '../../context/Context'
import { useNavigate } from 'react-router-dom';
// import Swiper core and required modules
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

const Newreleased = () => {
    const navigate = useNavigate()
    const {newreleased} = useContext(Context)
    
  return (
    
    <div className='games-section'>
           <div className="section-header">
        <h2>Upcoming games</h2>

        <div className="swiper-buttons">
          <button className="new-prev">←</button>
          <button className="new-next">→</button>
        </div>

      </div>
        <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={4}
        navigation={{
          prevEl: '.new-prev',
          nextEl: '.new-next',
        }}
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
  {newreleased.map((game) => (
    <SwiperSlide key={game.id}>
      <div className="games" onClick={()=>navigate(`/game/${game.id}`)}>
    <img src={game.background_image} alt={game.name} />
    <div className="details">
      <div className="information">
           <h2>{game.name}</h2>
        <p>Based on {game.ratings_count} Reviews</p>
      </div>
    <div className="score">{game.rating}</div>
    </div>
</div>
      
    </SwiperSlide>
  ))}
</Swiper>
          
    
    </div>
    
  )
}

export default Newreleased
