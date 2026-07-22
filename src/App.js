import { useState, useEffect } from "react"
import './App.css';
import Gamedetails from './pages/Gamedetails';
import Main from './pages/Main';
import Context from "./context/Context"
import Rawgapi from "./api/Rawgapi"
import { Routes, Route } from "react-router-dom";
function App() {
  const API = Rawgapi()
  const [search, setSearch] = useState('')
   const [result, setResult] = useState([])
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
    
  return (
    <div className="App">
        <Context.Provider value={{
            search,
            result,
            handleChange,
            setSearch
           
         }}>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/game/:id' element={<Gamedetails />} />
      </Routes>
      </Context.Provider>
     
    </div>
  );
}

export default App;
