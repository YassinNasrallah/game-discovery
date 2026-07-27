import React, { useContext } from 'react'
import Context from '../../context/Context'

const Gameabout = () => {
    const {gameinfo, showtext} = useContext(Context)
  return (
    <div className='game-information'>
        <h2>Description</h2>
        <p>{gameinfo.description_raw}</p>
    </div>
  )
}

export default Gameabout
