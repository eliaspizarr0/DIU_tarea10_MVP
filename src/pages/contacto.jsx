import React from 'react'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/rree.png'

export const HomePage = () => {
  return (
    <div className='page'>
      <img src={LogoUSM} height={100} alt='logo rree' /><br />
      <NavBar />
      <h2>Contacto</h2>
    </div>
  )
}

export default HomePage
