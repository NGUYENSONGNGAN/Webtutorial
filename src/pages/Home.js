import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/Home.css"
import BannerImage from"../assets/pizza.jpeg"

function Home() {
  return (
    <div className='home'>
      <div 
      className='headerContainer'
      style={{backgroundImage:`url(${BannerImage})`}}>
        <h1>
          Pedro's Pizzeria
        </h1>
        <p>PIZZA TO FIT ANY TASTE</p>
        <Link to="/menu"><Button>ORDER NOW</Button></Link>

      </div>
    </div>
  )
}

export default Home