import React, { useContext } from 'react'
import Context from '../../context/Context'
import { useNavigate } from 'react-router-dom'
const SearchSuggestions = () => {
  const navigate = useNavigate()
    const {result, showSearch}= useContext(Context)
  return (
    <div className='SearchSuggestions'>
         <div className="suggestions" >
             {result.map((game)=>(
            
           
            
            <div className="content" onClick={()=> navigate(`/game/${game.id}`)} >
                 <img src={game.background_image} alt="" />
                 <div className="game-description">
                    <h3>{game.name}</h3>
                    <p>game</p>
                 </div>
                
            </div>
           
         ))}

         </div>
    </div>
  )
}

export default SearchSuggestions
