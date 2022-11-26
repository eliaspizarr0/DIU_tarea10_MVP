import React from 'react'

import NavBar from '../components/nav_bar'
import LogoUSM from '../assets/rree.png'

export const HomePage = () => {
  return (
    <div className='page'>
      <img src={LogoUSM} height={100} alt='logo rree' /><br />
      <NavBar />
      <h2>Quienes somos</h2>
      <h4>La Dirección de Relaciones Estudiantiles contribuye a la formación integral de la comunidad estudiantil de todos los Campus y Sedes de la USM. Está a cargo de proveer apoyo psicosocial, asistencial y de fomento, con el objetivo de favorecer la formación de profesionales durante su vida universitaria, especialmente atendiendo al legado testamentario de nuestro fundador.</h4>
    </div>
  )
}

export default HomePage
