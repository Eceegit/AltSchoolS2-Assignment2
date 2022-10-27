import React from 'react'
import { NavLink } from 'react-router-dom'



const NavigationPage = () => {
    const NavCurrentStyle = ({isActive}) => {
      return {
        color: isActive ? 'red' : '#fff', 
        
      }

    }

  return (
      <nav className='navlinks'>
        <NavLink to="/" className='navlink' style={NavCurrentStyle}>Home</NavLink>{' '}
        <NavLink to="/about" className='navlink' style={NavCurrentStyle}>About</NavLink>{' '}
        <NavLink to="/users" className='navlink' style={NavCurrentStyle}>Users</NavLink>{' '}
      {/* <NavLink to="/users/firstUsers" style={{NavCurrentStyle}}>First User</NavLink>
         <NavLink to="/users/secondUsers" style={{NavCurrentStyle}}>Second User</NavLink> */}
      
      </nav>
  )
}

export default NavigationPage