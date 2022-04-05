import React from 'react';

import LogIn from './pages/LogIn';
import HomePage from './pages/HomePage';
import {  Route, Routes } from "react-router-dom";

import './styles/App.scss';
function App() {
  return (
    <div className="App">
    <Routes>
    <Route path='/' element={<LogIn/>} />
    <Route path='HomePage' element={<HomePage/>} />
    </Routes>
    </div>
  );
}

export default App;
