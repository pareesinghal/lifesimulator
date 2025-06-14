import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import NewPage from './NewPage';
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new-page" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
