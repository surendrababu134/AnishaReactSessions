import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FAbout from '../About'
import FContact from '../Contact'
import FHome from '../Home'
const FBody = () => {
    return (
        <Routes>
            <Route path='/' element={<FHome />} />
            <Route path='/about' element={<FAbout />} />
            <Route path='/contact' element={<FContact />} />

        </Routes>
    )
}

export default FBody