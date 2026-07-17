
import Logo from './Logo'
import Navlinks from './Navlinks'
import Input from '../search/Input'
import Shopicon from './Shopicon'
import Searchicon from '../search/Searchicon'
import SearchSuggestions from '../search/SearchSuggestions'
import Search from '../search/Search'
const Navigation = () => {
  return (
    <div className='navigation'>
       <div className="navigation-top">
          <Logo />
          <Navlinks />
          
          <Search />
           
          <div className="icons">
             <Searchicon />
             <Shopicon />
          </div>
         
       </div>
      
       
       
       
    </div>
  )
}

export default Navigation
