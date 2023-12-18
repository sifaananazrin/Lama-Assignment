import React from "react";
import { Routes, Route } from "react-router-dom";
import UserRoute from "./Routes/UserRoute";
import HomePage from "./Pages/HomePage"

function App() {
  return (
    <>
       <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user/*" element={<UserRoute />} />
      </Routes> 
    
    </>
  );
}

export default App;
