import { useState, useEffect } from "react"
import Context from "../context/Context"
import Navigation from "../components/navigation/Navigation"
import Input from "../components/navigation/Input"
import Rawgapi from "../api/Rawgapi"
import '../style/main.css'
import SearchSuggestions from "../components/navigation/SearchSuggestions"


const Main = () => {
  return (
    <div className='main-container'>
              <Navigation />        
    </div>
  )
}

export default Main
