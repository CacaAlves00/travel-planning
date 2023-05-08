import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TravelsPage from './pages/TravelsPage/TravelsPage';
import TravelPage from './pages/TravelPage/TravelPage';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<TravelsPage />} />
        <Route path='travel/:travelId' element={<TravelPage />} />
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
