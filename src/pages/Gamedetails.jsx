import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Rawgapi from '../api/Rawgapi'
import Navigation from '../components/navigation/Navigation'
import Gameinfo from '../components/gamepage/Gameinfo'
import Context from '../context/Context'
import GamesShots from '../components/gamepage/GamesShots'
import Gameabout from '../components/gamepage/Gameabout'
import '../style/Gamedetails.css'

const API = Rawgapi()
const Gamedetails = () => {
  
    const { id } = useParams()
    const [gameinfo, setGameinfo]=useState([])
    const [screenshots, setScreenshots] = useState([])
  
    useEffect(()=>{
       const fetchgame = async()=>{
            const game = await API._getGamebyid(id)
            setGameinfo(game)
       }
       fetchgame()
    },[id])

    useEffect(()=>{
      const fetchgame = async()=>{
        const screenshot = await API._getGameScreenshot(id)
        setScreenshots(screenshot)
      }
      fetchgame()
    },[id])


  return (
    <div className='main-container'>
     <Navigation />
     <Context.Provider value={{
      gameinfo,
      id,
      screenshots,
      
     }}>
       <Gameinfo />
       <GamesShots />
       <Gameabout />
     </Context.Provider>
     

    </div>
  )
}

export default Gamedetails
