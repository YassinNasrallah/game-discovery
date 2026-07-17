import { useContext } from "react"
import Context from "../../context/Context"
import Searchicon from "./Searchicon"

const Input = () => {
  
  const {search, handleChange ,showInput} = useContext(Context)

  return (
    <>
   {showInput && (<form className='search-input'>
    <input type="text" placeholder='search ...' value={search} onChange={handleChange}/>
   </form>)}
   
   </>
  )
  
}

export default Input
