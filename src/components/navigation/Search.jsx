import React, { useContext } from 'react'
import Input from './Input'
import SearchSuggestions from './SearchSuggestions'
import Context from '../../context/Context'


const Search = () => {
    const {search} = useContext(Context)
  return (
    <div className='search-wrapper'>
        
          
              <Input />
               {search.trim() !== '' && (
                 <SearchSuggestions />
               )}


      
    </div>
  )
}

export default Search
