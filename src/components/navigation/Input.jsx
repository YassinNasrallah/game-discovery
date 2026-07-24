import { useContext } from "react"
import Context from "../../context/Context"

const Input = () => {
  const {search, handleChange } = useContext(Context)
  return (
    <>
   <form className='search-input'>
    <input type="text" placeholder='Search' value={search} onChange={handleChange}/>
   </form>
   </>
  )
  
}

export default Input
