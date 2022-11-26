import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='nav-bar'>
      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/'
      >
        Inicio
      </NavLink>

      <NavLink
        className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
        to='/internal'
      >
        Quienes somos
      </NavLink>
    

  <NavLink
    className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
    to='/noticias'
  >
    Noticias
  </NavLink>



  <NavLink
    className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
    to='/publicaciones'
  >
    Publicaciones
  </NavLink>


  <NavLink
    className={({ isActive }) => `nav-bar__link ${isActive ? 'nav-bar__link--active' : ''}`}
    to='/contacto'
  >
    Contacto
  </NavLink>

</nav>
  )
}

export default NavBar
