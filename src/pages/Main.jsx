import { useState, useEffect} from "react"
import Navigation from "../components/navigation/Navigation"
import '../style/main.css'
import Bestrating from "../components/home/Bestrating"
import Context from "../context/Context"
import Rawgapi from "../api/Rawgapi"
const API = Rawgapi()

const Main = () => {
  const [games, setGames] = useState([])
  useEffect(()=>{
      async function fetchgame(){
        const data = await API._getGames(games)
        setGames(data)
      }
   fetchgame()
  },[])

  return (
    <div className='main-container'>
       <Navigation /> 
          <Context.Provider value={{
            games
          }}>
              <Bestrating />  
          </Context.Provider>
                 
    </div>
  )
}

export default Main
