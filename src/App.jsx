import React from 'react'
import { BrowserRouter, Route, Switch  } from 'react-router-dom'
import Home from './pages/Home/Home'
import AddCar from './pages/AddCar/AddCar'
import Garage from './pages/Garage/Garage'
import Navbar from './components/Navbar/Navbar'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/add-car'>
          <AddCar />
        </Route>
        <Route path='/garage'>
          <Garage />
        </Route>
      </Switch>  
    </BrowserRouter>
  )
}

