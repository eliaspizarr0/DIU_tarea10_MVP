import React from 'react'
import { Button } from '@mui/material'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/rree.png'

export const InternalPage = () => {
  return (
    <div className='page'>
      <img src={LogoUSM} height={100} alt='logo rree' /><br />
      <NavBar />
      <h2>Quienes somos</h2>
      <Button variant='contained'>Material UI Button</Button>
    </div>
  )
}

export default InternalPage
