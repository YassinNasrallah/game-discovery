
import { useContext } from "react";
import { FiMenu } from "react-icons/fi";
import Context from "../../context/Context";
const Menuicon = () => {
  const {handleClick , openmenu} = useContext(Context)
  return (
    <button className={`menu-button ${openmenu?"active" : ""}`} type="button" onClick={handleClick}>
      <FiMenu className="menu-icon" size={30}/>
    </button>
  )
}

export default Menuicon
