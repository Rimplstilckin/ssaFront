import React from 'react';
// MUI
import Box from '@mui/material/Box';
// css
import './css/App.css';
// components
import InputForm from './Components/InputForm';
import WorkersData from './Components/WorkersData';

// const dummy = 'https://dummyjson.com/products/1';
// const backend = 'http://localhost:8080/message'

function App(){

  return (
    <Box className= 'wrapper' >
          <InputForm />
          <WorkersData />
    </Box>
  );
}

export default App;
