import { useState, useEffect } from "react"
import Context from "../context/Context"
import Navigation from "../components/navigation/Navigation"
import Input from "../components/search/Input"
import Rawgapi from "../api/Rawgapi"
import '../style/main.css'

const API = Rawgapi()
const Main = () => {
   
   const [search, setSearch] = useState('')
   const [result, setResult] = useState([])
   const [showInput, setShowInput] = useState(false)


   const handleClick = (prev)=>{
    setShowInput(prev => !prev)
   }

   const handleChange = (event) =>{
     setSearch(event.target.value)
   }

   useEffect(()=>{
  
     const timer = setTimeout(async()=>{
        const game =await API._getGames(search) 
        setResult(game)
     },500)

     return()=> {
        clearTimeout(timer)
     }
   },[search])
   console.log(result)
   
   
  return (
    <div className='main-container'>
        

         <Context.Provider value={{
            search,
            result,
            handleChange,
            handleClick,
            showInput
         }}>
              <Navigation />
         </Context.Provider>
       
      
        
        
    </div>
  )
}

export default Main
