import React from 'react'
import Revas from '../assets/revas.jpg'

function About() {
  return (
    <div className='about'>
        <div className='about-top'>
            <img src={Revas} />
        </div>
        <div className='about-bottom'>
            <h1>About Me</h1>
            <p>I am a computer engineer student at Ondokuz Mayıs university and I am trying to improve myself with the react projects.</p>
        </div>
      
    </div>
  )
}

export default About
