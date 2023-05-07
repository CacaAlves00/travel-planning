import React from 'react'
import { BrowserRouter, Link, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import TravelsPage from './pages/TravelsPage/TravelsPage';
import TravelPage from './pages/TravelPage/TravelPage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TravelsPage />} />
        <Route path='travel/:travelId' element={<TravelPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
