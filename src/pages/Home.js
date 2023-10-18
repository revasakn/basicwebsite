import React from 'react'
import { Link } from 'react-router-dom'
import Banner from '../assets/banner2.jpg'

function Home() {
  return (
    <div className='home'  style={{backgroundImage: `url(${Banner})`}}>
      <div className='headerContainer'>
        <h1>Revas AKIN</h1>
        <p>Front-End Developer</p>
        <Link to="./work"><button>See My Work</button></Link>
        
      </div>
    </div>
  )
}

export default Home
