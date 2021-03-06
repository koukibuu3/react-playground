import React, { useEffect } from 'react'
import { Route, Redirect } from 'react-router'
import { Switch, useLocation } from 'react-router-dom'
import ReactGA from 'react-ga'

import Home from './components/pages/Home'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import User from './components/pages/User'
// import NotFound from './components/pages/NotFound'

const App: React.VFC = () => {
  const location = useLocation()

  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search)
  }, [location.key])

  return (
    <>
      <h1>React Router v5</h1>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact">
          <Contact destAddress="contact@our-company.com" />
        </Route>
        <Route path="/user/:userId([0-9a-f]{8})" component={User} />
        <Redirect path="/user/profile/:userId" to="/user/:userId" />
        {/* <Route component={NotFound} /> */}
        <Redirect push to="/" />
      </Switch>
    </>
  )
}

export default App
