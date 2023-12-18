import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UserRoute from './Routes/UserRoute';
import HomePage from './Pages/HomePage';
import NotFoundPage from './Pages/NotFoundPage'; 


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/*" element={<UserRoute />} />
        <Route path="*" element={<NotFoundPage />} /> 
      </Routes>
    </>
  );
}

export default App;
