import React from 'react'
import { NavLink } from 'react-router-dom'
import routes from '../routes'

const NavRoutes: React.FC = () => {
  return (
    <div>
      {routes.map(route => <NavLink to={route.path}>{route.path}</NavLink>)}
    </div>
  )
}

export default NavRoutes
