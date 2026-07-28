import React, { useContext } from 'react'
import Context from '../../context/Context'

const Platforms = () => {
    const {gameinfo} = useContext(Context)
  return (
      <div className="platforms">
        <h2>Platforms</h2>
            {gameinfo.parent_platforms?.map(({ platform }) => (
              <span key={platform.id} className="platform-tag">
                {platform.name}
              </span>
            ))}
          </div>
  )
}

export default Platforms
