import { useState, useEffect} from "react"
import Navigation from "../components/navigation/Navigation"
import '../style/main.css'
import Bestrating from "../components/home/Bestrating"
import Context from "../context/Context"
import Rawgapi from "../api/Rawgapi"
import Newreleased from "../components/home/Newreleased"
import Playstationgames from "../components/home/Playstationgames"
const API = Rawgapi()

const Main = () => {
  
  const [games, setGames] = useState([])
  const [newreleased, setNewreleased] = useState([])
  const [playstation, setPlaystation] = useState([])
  useEffect(()=>{
      async function fetchgame(){
        const data = await API._getGames(games)
        setGames(data)

        const newData = await API._getNewReleased()
        setNewreleased(newData)

        const playstationdata = await API._getPlaystationGames()
        setPlaystation(playstationdata)

      }
   fetchgame()
  },[])

  return (
    <div className='main-container'>
          <Navigation /> 
          <Context.Provider value={{
            games,
            newreleased,
            playstation
          }}>
              <Bestrating />  
              <Newreleased />
              <Playstationgames />
          </Context.Provider>
                 
    </div>
  )
}

export default Main
