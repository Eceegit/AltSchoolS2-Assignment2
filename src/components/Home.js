import React from 'react'
import { NavLink } from 'react-router-dom'
import NavigationPage from './NavigationPage'


export const Home = () => {
    return (
    <div className='homePage'>
        <h1>Welcome to the Routing section!</h1>   
        <NavigationPage />
    </div>

  )
}

export default Home