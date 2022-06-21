import React from 'react';
import { useEffect, useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import FormDialog from './components/Modal';

function App() {
  type CloneDates = [
    string | undefined,
    string | undefined,
    string | undefined,
    string | undefined,
    string | undefined
  ];

  const [cloneDates, setCloneDates] = React.useState([]);

  return (
    <div className="App">
      <FormDialog />
      <Calendar date={new Date()} cloneDates={cloneDates} setCloneDates={setCloneDates}/>
    </div>
  );
}

export default App;
