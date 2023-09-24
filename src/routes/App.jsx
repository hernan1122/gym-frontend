import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Back from '../containers/Back';
import Chest from '../containers/Chest';
import Biceps from '../containers/Biceps';
import Triceps from '../containers/Triceps';
import Shoulders from '../containers/Shoulders';
import Legs from '../containers/Legs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/back' element={<Back />} />
        <Route path='/chest' element={<Chest />} />
        <Route path='/biceps' element={<Biceps />} />
        <Route path='/triceps' element={<Triceps />} />
        <Route path='/shoulders' element={<Shoulders />} />
        <Route path='/legs' element={<Legs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
