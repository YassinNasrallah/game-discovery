import React, { useContext } from 'react'
import Context from '../../context/Context'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Bestrating = () => {
    const {games} = useContext(Context)
    const bestGames =games.filter((game)=>game.rating >=4)
  return (
    <div className='bestrating'>
  <h2>Best Rating</h2>
  

  <Swiper
   modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
>
  {bestGames.map((game) => (
    <SwiperSlide key={game.id}>
      <div className="games">
        <img src={game.background_image} alt={game.name} />
        <h3>{game.name}</h3>
        <button>More about</button>
      </div>
    </SwiperSlide>
  ))}
</Swiper>






 
</div>
  )
}

export default Bestrating
