import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import routes from '../routes'
import NavRoutes from '../components/NavRoutes'

// import LoginHeader from './Components/LoginHeader'
// import NotFound from './views/NotFound'

interface MatchParams {
}


const App: React.FC = () => {
  return (
    <Router>
      {/* <LoginHeader /> */}
      <NavRoutes />
      <Switch>
        {routes.map(({ path, exact, component: Component, ...rest }) => (
          <Route
            key={path}
            path={path}
            exact={exact}
            render={(props: MatchParams) => <Component {...props} {...rest} />}
          />
        ))}
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Router>
  )
}

export default App