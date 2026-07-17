import React, { useContext } from 'react'
import Context from '../../context/Context'

const SearchSuggestions = () => {
    const {result, showSearch}= useContext(Context)
  return (
    <div className='SearchSuggestions'>
         <div className="suggestions">
             {result.map((game)=>(
            
           
            
            <div className="content">
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
