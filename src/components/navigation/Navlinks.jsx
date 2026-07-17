import React, { useContext } from 'react'
import Context from '../../context/Context'

const Navlinks = () => {

  const {showInput}=useContext(Context)
  return (
    <>
    {!showInput && (<div>
       <ul className='nav-links'>
        <li className='nav-item'>Home</li>
        <li className='nav-item'>New game</li>
        <li className='nav-item'>Knews</li>
        <li className='nav-item'>Rating</li>
       </ul>
    </div>)}
    </>
  )
}

export default Navlinks
