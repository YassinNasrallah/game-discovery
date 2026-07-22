import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Rawgapi from '../api/Rawgapi'
import Navigation from '../components/navigation/Navigation'

const API = Rawgapi()
const Gamedetails = () => {
  
    const { id } = useParams()
    const [gameinfo, setGameinfo]=useState([])
    
    useEffect(()=>{
       const fetchgame=async()=>{
            const game = await API._getGamebyid(id)
            setGameinfo(game)
       }
       fetchgame()
    },[id])


  return (
    <>
     <Navigation />
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
         <hr />
          <div className="game-information">
             <p>Released: {gameinfo.released}</p>
          <p>Rating: {gameinfo.rating}/5</p>
          </div>
        </div>
      </div>
      
    </div>

    </>
  )
}

export default Gamedetails
