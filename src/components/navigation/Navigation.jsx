
import Logo from './Logo'

import Input from './Input'
import Shopicon from './Menuicon'

import SearchSuggestions from './SearchSuggestions'
import Search from './Search'
const Navigation = () => {
  return (
    <div className='navigation'>
       <div className="navigation-top">
          <Logo />
          
          
          <Search />
           
          <div className="icons">
          
             <Shopicon />
          </div>
         
       </div>
      
       
       
       
    </div>
  )
}

export default Navigation
