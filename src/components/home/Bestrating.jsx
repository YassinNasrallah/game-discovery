import React, { useContext } from 'react'
import Context from '../../context/Context'
// import Swiper core and required modules
import { Scrollbar} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

import 'swiper/css/scrollbar';
const Bestrating = () => {
    const {games} = useContext(Context)
    const bestGames =games.filter((game)=>game.rating >=4.10)
  return (
    <div className='bestrating'>
  <h2>Best Rating</h2>
  

  <Swiper
   modules={[Scrollbar]}
      spaceBetween={10}
      slidesPerView={4}
      navigation
      scrollbar={{ draggable: true }}

>
  {bestGames.map((game) => (
    <SwiperSlide key={game.id}>
      <div className="games">
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

export default Bestrating
