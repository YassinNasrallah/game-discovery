import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Context from '../../context/Context'

const Navlinks = () => {
    const {openmenu} = useContext(Context)
  return (
    <ul className={`navlinks ${openmenu?"active" : ''} `}> 
        <Link to='/' className='nav-item'>Home</Link>
        <li className='nav-item'>Platform
            <ul className='dropdown-menu'>
               <Link className='nav-item'>Playstation</Link>
               <Link className='nav-item'>Xbox</Link>
               <Link className='nav-item'>Nintendo</Link>
               <Link className='nav-item'>Pc</Link>
            </ul>
        </li>
        <li className='nav-item'>Games
            <ul className='dropdown-menu'>
                <Link className='nav-item'>Action</Link>
                <Link className='nav-item'>Rpg</Link>
                <Link className='nav-item'>Sport</Link>
                <Link className='nav-item'>Shoting</Link>
            </ul>
        </li>
        
    </ul>
  )
}

export default Navlinks
