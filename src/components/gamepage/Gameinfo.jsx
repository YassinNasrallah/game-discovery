import React, { useContext } from 'react'
import Context from '../../context/Context'

const Gameinfo = () => {
    const {gameinfo} = useContext(Context)
  return (
       <div className="game-details-page">
      <div className="game-details-container">

        <div className="game-img">
          <img
            src={gameinfo.background_image}
            alt={gameinfo.name}
          />
        </div>

        <div className="game-deatile">
          <div className="description">
                 <h1>{gameinfo.name}</h1>
                  <p>{gameinfo.description?.replace(/<[^>]+>/g, "").slice(0, 300)}...</p>
          </div>
          <div className="game-information">
             <p>Released: {gameinfo.released}</p>
          <p>Rating: {gameinfo.rating}/5</p>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Gameinfo
