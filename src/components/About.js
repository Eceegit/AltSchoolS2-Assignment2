import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  throw new Error("error!!")
  return (
    <div>
        <h1>About Us</h1>
        <p>This is the About us page</p>
        <Link to="/">Home</Link>
        <Link to="/users">Users</Link>
    </div>
  )
}

export default About