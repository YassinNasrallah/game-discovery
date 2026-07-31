import { useState, useEffect} from "react"
import Navigation from "../components/navigation/Navigation"
import '../style/main.css'
import Bestrating from "../components/home/Bestrating"
import Context from "../context/Context"
import Rawgapi from "../api/Rawgapi"
import Newreleased from "../components/home/Newreleased"
const API = Rawgapi()

const Main = () => {
  
  const [games, setGames] = useState([])
  const [newreleased, setNewreleased] = useState([])
  useEffect(()=>{
      async function fetchgame(){
        const data = await API._getGames(games)
        setGames(data)

        const newData = await API._getNewReleased(games)
        setNewreleased(newData)
      }
   fetchgame()
  },[])

  return (
    <div className='main-container'>
          <Navigation /> 
          <Context.Provider value={{
            games,
            newreleased
          }}>
              <Bestrating />  
              <Newreleased />
          </Context.Provider>
                 
    </div>
  )
}

export default Main
