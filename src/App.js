import React from 'react';

import './App.css';
import LightSwitch from './Components/lightSwitch';
import WarningLight from './Components/WarningLight';
import DataDisplay from './Components/DataDisplay';

function App() {
  return (
    <div className="App">
      <WarningLight polution={5900} />
      <LightSwitch light={true} />
      <DataDisplay text={'Temperature'} temp={24} />
      <DataDisplay text={'Humidity'} temp={45} />
      <DataDisplay text={'Polution'} temp={1340} />
    </div>
  );
}

export default App;
