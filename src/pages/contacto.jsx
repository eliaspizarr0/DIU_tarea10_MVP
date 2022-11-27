import React from 'react'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/rree.png'


export const HomePage = () => {
  return (
    <div className='page'>
      <img src={LogoUSM} height={100} alt='logo rree' /><br />
      <NavBar />
      <h1>Contacto</h1>
      <h3>Sede Concepción</h3>
          <h5>Arteaga Alemparte 943</h5>
          <h5>Hualpén, Concepción</h5>
          <h5>Tel: (+56-41) 2407622</h5>
          <h5>rree.concepcion@usm.cl</h5>

          <h3>Campus San Joaquín</h3>
          <h5>Av. Vicuña Mackenna 3939</h5>
          <h5>San Joaquín, Santiago</h5>
          <h5>Tel: (+56-2) 23037073</h5>
          <h5>rree.cssj.cl</h5>

          <h3>Campus Vitacura</h3>
          <h5>Av. Santa María 6400</h5>
          <h5>Vitacura, Santiago</h5>
          <h5>Tel: (+56-2) 32028073</h5>
          <h5>rree.csv@usm.cl</h5>

    </div>
  )
}

export default HomePage
