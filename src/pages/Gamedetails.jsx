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
     <div className="game-details-page">
      <div className="game-details-container">

        <div className="game-img">
          <img
            src={gameinfo.background_image}
            alt={gameinfo.name}
          />
        </div>

        <div className="game-deatile">
          <h1>{gameinfo.name}</h1>
          <p>Released: {gameinfo.released}</p>
          <p>Rating: {gameinfo.rating}/5</p>
          <button>Buy Now</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default Gamedetails
