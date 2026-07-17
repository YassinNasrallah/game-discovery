import { useContext } from "react";
import { FiSearch } from "react-icons/fi";
import Context from "../../context/Context";

const Searchicon = () => {
    const { handleClick, showInput} = useContext(Context)
  return (
   
       
           <FiSearch className='icon'size={30} onClick={handleClick}/>
     
      
  )
}

export default Searchicon
