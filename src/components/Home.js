import React from 'react'
import { Link } from 'react-router-dom'


export const Home = () => {
        const NavCurrentStyle =({isActive}) =>{
        return {
                color: isActive ? 'red' : 'purple', 
                fontWeight: isActive ? 'bold' : 'normal',
                textDecoration: isActive ? 'none' : "underline"
            }
        }
    
    return (
    <div>
        <h1>Welcome to the Routing section!</h1>
        <p>This is the About us page</p>
        <Link to="/about" style={{NavCurrentStyle}}>About Us</Link>
        <Link to="/users" style={{NavCurrentStyle}}>Users</Link>
        <Link to="/users/firstUsers" style={{NavCurrentStyle}}>First User</Link>
    </div>

  )
}

export default Home