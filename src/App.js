import React from 'react';

import './App.css';
import LightSwitch from './Components/lightSwitch';
import WarningLight from './Components/WarningLight';
import DataDisplay from './Components/DataDisplay';
import Button from '@mui/material/Button';

const fun = () => {
  console.log("Test");
}

// const dummy = 'https://dummyjson.com/products/1';
const backend = 'http://localhost:8080/message'

async function logJSONData() {
  fetch(backend)
    .then(res => res.text())
    .then(json => console.log(json))
}

function App() {
  return (
    <div className="App">
      <WarningLight polution={5900} />
      <LightSwitch light={true} />
      <DataDisplay text={'Temperature'} temp={24} />
      <DataDisplay text={'Humidity'} temp={45} />
      <DataDisplay text={'Polution'} temp={1340} />
      <Button on onClick={(fun)}>Test</Button>
      <Button on onClick={(logJSONData)}>Test</Button>
      
    </div>
  );
}

export default App;
