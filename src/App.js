import React from 'react';
import { HashRouter , Routes, Route } from "react-router-dom";

// MUI
import Box from '@mui/material/Box';
// css
import './css/App.css';
// components
import InputForm from './Components/InputForm';
import WorkersData from './Components/WorkersData';
import Navigation from './Components/Navigation';
import DeleteWorker from './Components/DeleteWorker';


function App(){

  return (
    <Box className= 'wrapper' >
      <Navigation />
      <HashRouter>
        <Routes>
            <Route index element={<InputForm/>} />
            <Route path='seeall' element={<WorkersData />} />
            <Route path='remove' element={<DeleteWorker />} />
        </Routes>
      </HashRouter>
    </Box>
  );
}

export default App;
