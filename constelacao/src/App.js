import React from 'react';
import './App.css'
import Cards from './componente/Cards';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cultura from './componente/Cultura';






const App = () => {
  return (
   
      <BrowserRouter>
      <Routes>
     <Route path="/" end element={<Cards />} />
     <Route path="Cultura" element={<Cultura />} />
     </Routes>
     </BrowserRouter>
      
    
  )
}

export default App