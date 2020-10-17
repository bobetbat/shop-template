import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../routes'
import './styles.scss'


const NavRoutes: React.FC = () => {
  const [ mobileMenu, setMobileMenu] = useState(false)
  return (
    <div className="navMenu">
      <div>logo</div>
      <div className={`navRoutes ${mobileMenu && 'navActive'}`}>
        {routes.map(route => 
          <div key={route.path} className="navButton">
            <NavLink to={route.path}>{route.path}</NavLink>
          </div>
        )}
      </div>
      <div className={`burger ${mobileMenu && 'burgerToggled'}`} onClick={() => setMobileMenu(!mobileMenu) }>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default NavRoutes
