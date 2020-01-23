import React from 'react'
import './Hero.scss'
import ApplyButton from '../ApplyButton/ApplyButton'

const Hero = () => {
  return (
    <div className="Hero">
      <div className="hero_title col-6">
        <h1>
        Over 200,000 loans provided to individuals and small businesses in Nigeria.
        </h1>
        <ApplyButton />
      </div>
      
    </div>
  )
}

export default Hero
