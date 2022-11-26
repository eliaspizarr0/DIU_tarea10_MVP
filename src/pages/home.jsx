import React from 'react'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/rree.png'
import imagenact from '../assets/act.png'

export const HomePage = () => {
  return (
    <div className='page'>
      <img src={LogoUSM} height={100} alt='logo rree' /><br />
      <NavBar />
      <img src={imagenact} height={380} alt='logo act' /><br />
      <h2>Página de Inicio</h2>
    </div>
  )
}

export default HomePage
