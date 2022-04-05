import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../About'
import Contact from '../Contact'
import Home from '../Home'

export class Body extends Component {
  render() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />

        </Routes>
    )
  }
}

export default Body