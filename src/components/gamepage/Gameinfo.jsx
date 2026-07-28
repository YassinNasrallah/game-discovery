import React, { useContext } from 'react'
import Context from '../../context/Context'

const Gameinfo = () => {
  const { gameinfo } = useContext(Context)

  return (
    <div className="game-details-page">
      <div className="game-details-container">
        <div className="game-image">
          <img src={gameinfo.background_image} alt={gameinfo.name} />
        </div>

        <div className="game-details">
          <div className="developers">
            {gameinfo.developers?.map((developer) => (
              <span key={developer.id} className="developer-tag">
                {developer.name}
              </span>
            ))}
          </div>

          <h1 className="game-title">{gameinfo.name}</h1>

        
           <div className="genres">
  {gameinfo.genres?.map((genre) => (
    <span key={genre.id} className="genre-tag">
      {genre.name}
    </span>
  ))}
</div>

          <h2 className="">Released: {gameinfo.released}</h2>

          <div className="rating">
            <h2 className="rating-label">Based on {gameinfo.ratings_count} Reviews</h2>
            <div className="score">{gameinfo.rating}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Gameinfo